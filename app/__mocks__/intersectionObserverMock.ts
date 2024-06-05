export class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

export const IntersectionObserverMockInstance: jest.MockedClass<
  typeof IntersectionObserver
> = IntersectionObserverMock as any;
