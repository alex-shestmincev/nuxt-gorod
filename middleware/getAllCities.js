export default function ({ store }) {
  return store.dispatch('city/list');
}
