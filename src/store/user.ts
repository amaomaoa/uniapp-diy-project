import { defineStore } from "pinia";
import { ref } from "vue";
import { userMsg } from "~/api/user";

// 第一个参数是应用程序中 store 的唯一 id
export const useUsersStore = defineStore("user", () => {
    const user = ref<User>({
        avatar: "",
        nickName: "",
    });
    const setUser = (u: User) => {
        user.value = u;
        if (!u.avatar) {
            user.value.avatar =
                "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0";
        }
    };
    const updateUser = () => {
        userMsg().then((res) => {
            user.value = res.data;
        });
    };
    return { user, setUser, updateUser };
});
