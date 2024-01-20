export const useGetUserData = () => {
    const { userID, name, profilePicture, isAuth } = JSON.parse(localStorage.getItem("auth"));

    return { userID, name, profilePicture, isAuth };
};