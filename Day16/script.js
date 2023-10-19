let countdown = (num, callback) => {
    let countdownElement = document.getElementById('countdown');

    setTimeout(() => {
        countdownElement.textContent = num;

        setTimeout(() => {
            num--;

            countdownElement.textContent = num;

            setTimeout(() => {
                num--;

                countdownElement.textContent = num;

                setTimeout(() => {
                    num--;

                    countdownElement.textContent = num;

                    setTimeout(() => {
                        num--;

                        countdownElement.textContent = num;

                        setTimeout(() => {
                            num--;

                            countdownElement.textContent = num;

                            setTimeout(() => {
                                num--;

                                countdownElement.textContent = num;

                                setTimeout(() => {
                                    num--;

                                    countdownElement.textContent = num;

                                    setTimeout(() => {
                                        num--;

                                        countdownElement.textContent = num;

                                        setTimeout(() => {
                                            num--;

                                            countdownElement.textContent = num;

                                            setTimeout(() => {
                                                countdownElement.textContent = "Happy Independence Day!";
                                                callback();
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
};

let displayIndependenceDay = () => {
    
};

countdown(10, displayIndependenceDay);
