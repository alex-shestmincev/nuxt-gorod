export default function ({ store }) {
  return store.dispatch('category/list');
}
