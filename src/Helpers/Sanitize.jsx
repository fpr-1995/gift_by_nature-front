export const validate = (type, input) => {
    if (type === "signin") {
        const inputSanitized = {
            alias : input.alias.trim(),
            password : input.password.trim(),
        }
        return inputSanitized;
    }
    if (type === "signup") {
        if (
            input.alias.trim().length < 3 ||
            input.password.trim().length < 3
        ) {
            return "3 caractères minimum";
        } else return true;
    }
};