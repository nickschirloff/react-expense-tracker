export const useGetUserData = () => {
    try {
        const { userID, name, profilePicture, isAuth } = JSON.parse(localStorage.getItem("auth"));

        return { userID, name, profilePicture, isAuth };
    } catch(error) {
        return { userID: "", name: "", profilePicture:"", isAuth: false};
    }

};