// See https://github.com/facebook/jest/issues/2208
jest.mock('Linking', () => ({
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  openURL: jest.fn(),
  canOpenURL: jest
    .fn()
    .mockImplementation((value: string) => Promise.resolve(value)),
  getInitialURL: jest
    .fn()
    .mockImplementation((value: string) => Promise.resolve(value)),
}))
