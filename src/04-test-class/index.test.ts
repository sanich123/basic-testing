import { SynchronizationFailedError, getBankAccount } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    expect(getBankAccount(385).getBalance()).toEqual(385);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const someBalance = getBankAccount(500);
    expect(() => someBalance.withdraw(575)).toThrow(
      'Insufficient funds: cannot withdraw more than 500',
    );
  });

  test('should throw error when transferring more than balance', () => {
    const ourBankAccount = getBankAccount(500);
    expect(() => ourBankAccount.transfer(700, ourBankAccount)).toThrow(
      'Transfer failed',
    );
  });

  test('should throw error when transferring to the same account', () => {
    const ourBankAccount = getBankAccount(500);
    expect(() => ourBankAccount.transfer(500, ourBankAccount)).toThrow(
      'Transfer failed',
    );
  });

  test('should deposit money', () => {
    const ourBankAccount = getBankAccount(500);
    expect(ourBankAccount.deposit(1200).getBalance()).toEqual(1700);
  });

  test('should withdraw money', () => {
    const ourBankAccount = getBankAccount(500);
    expect(ourBankAccount.withdraw(200).getBalance()).toEqual(300);
  });

  test('should transfer money', () => {
    const ourBankAccount = getBankAccount(500);
    const otherBankAccount = getBankAccount(700);
    ourBankAccount.transfer(200, otherBankAccount);
    expect(otherBankAccount.getBalance()).toEqual(900);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const ourBankAccount = getBankAccount(500);
    const fetchedBalance = await ourBankAccount.fetchBalance();
    if (fetchedBalance) {
      expect(typeof fetchedBalance).toBe('number');
    }
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const ourBankAccount = getBankAccount(500);
    const fetchedBalance = await ourBankAccount.fetchBalance();
    if (fetchedBalance) {
      ourBankAccount.deposit(fetchedBalance);
      expect(ourBankAccount.getBalance()).toEqual(500 + fetchedBalance);
    }
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const ourBankAccount = getBankAccount(500);
    try {
      await ourBankAccount.synchronizeBalance();
    } catch (error) {
      if (error instanceof SynchronizationFailedError) {
        expect(error).toEqual(SynchronizationFailedError);
      }
    }
  });
});
