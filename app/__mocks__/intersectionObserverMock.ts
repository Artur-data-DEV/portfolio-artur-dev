export class IntersectionObserverMock {
  observe: jest.Mock<void, [Element?]> = jest.fn();
  unobserve: jest.Mock<void, [Element?]> = jest.fn();
  disconnect: jest.Mock<void, []> = jest.fn();
}

export const IntersectionObserverMockInstance: jest.MockedClass<
  typeof IntersectionObserver
> = IntersectionObserverMock as any;
