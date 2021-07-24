function osusume(genle) {
    var message = "";

    if (genle == 1) {
        message = "HIPHOP";
    } else if (genle == 2) {
        message = "POP";
    } else if (genle == 3) {
        message = "Lock";
    } else if (genle == 4) {
        message = "Girls";
    } else {
        message = "House";
    }

    alert("あなたにおすすめのジャンルは" + message + "です");

}

