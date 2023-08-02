import { setActivePinia, createPinia } from "pinia";
import useUserStore from '@/stores/user.js'
import { beforeEach, describe, expect, test, vi } from "vitest";

//mocking firebase store dependencies
vi.mock('@/includes/firebase.js', () => ({
  auth: {
    signInWithEmailAndPassword: () => Promise.resolve()
  }
}))

describe('stores', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('authenticate user', async () => {
    const store = useUserStore();
    expect(store.userLoggedIn).not.toBe(true);
    await store.authenticate({});
    expect(store.userLoggedIn).toBe(true);
  })
})