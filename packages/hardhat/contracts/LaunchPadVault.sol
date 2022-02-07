// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import { MockLaunchpadToken } from "./MockLaunchpadToken.sol";

contract LaunchPadVault {
    string public name = "LaunchPadVault";

    address public owner;

    uint256 public totalBalance;

    IERC20 public launchPadToken;

    struct Staker {
      uint256 stakingBalance;
      bool hasStaked;
      bool isStaking;
      uint256 shares;
    }

    mapping(address => Staker) public stakers;
    
    constructor(address _launchPadToken) public {
        launchPadToken = IERC20(_launchPadToken);
        owner = msg.sender;
    }

    function calculateShareAmount(address _staker) private view returns (uint256) {
      return stakers[_staker].stakingBalance / totalBalance;
    } 

    function stakeTokens(uint _amount) public {
        // Require amount greater than 0
        require(_amount > 0, "amount cannot be 0");

        // Trasnfer Mock MockLaunchpadToken tokens to this contract for staking
        launchPadToken.transferFrom(msg.sender, address(this), _amount);

        Staker storage _currentStaker = stakers[msg.sender];

        // Update staking balance
        _currentStaker.stakingBalance += _amount;

        // Increase totalBalance
        totalBalance += _amount;

        // Add user to stakers array *only* if they haven't staked already
        if(!_currentStaker.hasStaked) {
            _currentStaker.hasStaked = true;
        }

        // Update staking status
        _currentStaker.isStaking = true;
    }

    // Unstaking Tokens (Withdraw)
    function unstakeTokens(uint256 _amount) public {
        require(stakers[msg.sender].hasStaked == true, "Have not staker before");

        Staker storage _currentStaker = stakers[msg.sender];

        // Require amount greater than 0
        require(_currentStaker.stakingBalance > 0, "staking balance cannot be 0");

        // Transfer MockLaunchpadToken tokens to this contract for staking
        launchPadToken.transfer(msg.sender, _amount);

        // decrement totalBalance
        totalBalance -= _amount;

        // Reset staking balance
        _currentStaker.stakingBalance = _currentStaker.stakingBalance - _amount;

        // Update staking status
        _currentStaker.isStaking = false;
    }

    function borrow(uint256 _amount, address _multiSig) public {
      // the multisig wallet can withdraw up to a certain amont of tokens
      // dictated by the launchpad
    }

}

