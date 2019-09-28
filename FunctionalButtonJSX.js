export default {
  functional: true,
  render: (h, { data, children }) => 
    <button {...data}>
      {children}
    </button >
};