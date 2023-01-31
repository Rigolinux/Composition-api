import axios from "axios";
import { ref } from "vue";

const useUsers = () => {
  const isLoading = ref(true);
  const currentPage = ref(1);
  const users = ref([]);
  const errorMessage = ref();

  const getUsers = async (page = 1) => {
    if (page <= 0) page = 1;
    isLoading.value = true;
    const resp = await axios.get("https://reqres.in/api/users", {
      params: {
        page,
      },
    });
    if (resp.data.data.length > 0) {
      users.value = resp.data.data;
      currentPage.value = page;
      errorMessage.value = null;
    } else if (currentPage.value > 0) {
      errorMessage.value = "No hay mas usuarios";
      return;
    }
    isLoading.value = false;
  };
  getUsers();
  return {
    isLoading,
    users,
    errorMessage,
    currentPage,
    getUsers,
    nextPage() {
      getUsers(currentPage.value + 1);
    },
    prevPage() {
      getUsers(currentPage.value - 1);
    },
  };
};

export default useUsers;
