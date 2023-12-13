// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

error Exchange_NotEnoughFunds();
error Exchange_NotProvider();
error Exchange_CanNotReleaseFunds();

contract Exchange {
    uint256 private constant DECIMALS = 18;
    uint256 private constant TEN_PERCENT = 10 * 1e16;
    address private immutable i_provider;
    struct Metadata {
        address seller;
        string transactionState;
        address buyer;
        uint256 price;
    }
    mapping(string => Metadata) private s_storage;

    modifier OnlyProvider() {
        if (msg.sender != i_provider) revert Exchange_NotProvider();
        _;
    }

    constructor() {
        i_provider = msg.sender;
    }

    function deductAmount(uint256 value) private pure returns (uint256) {
        return (value * TEN_PERCENT) / 1e18;
    }

    function sell(string memory _txtId, uint256 _price) public {
        Metadata memory currentTransaction = Metadata({
            seller: msg.sender,
            transactionState: "notSold",
            buyer: address(0),
            price: _price
        });

        s_storage[_txtId] = currentTransaction;
    }

    function buy(string memory _txtId) public payable {
        if (msg.value != s_storage[_txtId].price)
            revert Exchange_NotEnoughFunds();

        s_storage[_txtId].buyer = msg.sender;
        s_storage[_txtId].transactionState = "pending";
    }

    function releaseFund(string memory _txtId) public payable OnlyProvider {
        uint256 deducted = deductAmount(s_storage[_txtId].price);
        address seller = s_storage[_txtId].seller;
        uint256 amount = s_storage[_txtId].price - deducted;
        s_storage[_txtId].transactionState = "sold";

        (bool callSuccess, ) = payable(seller).call{value: amount}("");

        if (!callSuccess) revert Exchange_CanNotReleaseFunds();
    }

    function getProvider() public view returns (address) {
        return i_provider;
    }

    function getDecimal() public pure returns (uint256) {
        return DECIMALS;
    }

    function getStatus(
        string memory _txtId
    ) public view returns (address, string memory, address, uint256) {
        address seller = s_storage[_txtId].seller;
        string memory transactionState = s_storage[_txtId].transactionState;
        address buyer = s_storage[_txtId].buyer;
        uint256 price = s_storage[_txtId].price;

        return (seller, transactionState, buyer, price);
    }
}
