import { ref } from "vue";

const useCounter = () => {
  const count = ref(5);
  const increse = () => {
    count.value++;
  };
  // const decrese = () => {
  //   count.value--;
  // };
  return {
    count,
    increse,
    decrese: () => count.value--,
  };
};

export default useCounter;
