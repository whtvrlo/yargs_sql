const setApproval = (rating) => {
    try {
        if (rating === 0) {
            return 'bad';
        } else if (rating > 0 && rating <= 3) {
            return 'average'
        } else if (rating >= 4) {
            return 'good';
        }
    } catch (err) {
        console.log(err)
    }

};


module.exports = {
    setApproval,
}