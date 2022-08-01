export default {
    methods: {
        checkMaxMinLength(newValue) {
            const vue = this
            if (vue.reMin && vue.reMin >= newValue) {
                newValue = vue.reMin
            }
            if (vue.reMax && vue.reMax <= newValue) {
                newValue = vue.reMax
            }
            return newValue
        }
    }
}
