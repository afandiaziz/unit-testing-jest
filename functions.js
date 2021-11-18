// Data
const bmiData = {
    0: {
        name: "Underweight",
        img_inactive: "https://hellosehat.com/images/bmi-underweight-male-inactive.svg",
        img_active: "https://hellosehat.com/images/bmi-underweight-male-active.svg",
        rule: "< 18.5",
    },
    1: {
        name: "Healthy Weight",
        img_inactive: "https://hellosehat.com/images/bmi-healthy-male-inactive.svg",
        img_active: "https://hellosehat.com/images/bmi-healthy-male-active.svg",
        rule: "18.5 - 23.9",
    },
    2: {
        name: "Overweight",
        img_inactive: "https://hellosehat.com/images/bmi-overweight-male-inactive.svg",
        img_active: "https://hellosehat.com/images/bmi-overweight-male-active.svg",
        rule: "24 - 26.9",
    },
    3: {
        name: "Obese Type I",
        img_inactive: "https://hellosehat.com/images/bmi-obese_level_1-male-inactive.svg",
        img_active: "https://hellosehat.com/images/bmi-obese_level_1-male-active.svg",
        rule: "27 - 29.9",
    },
    4: {
        name: "Obese Type II",
        img_inactive: "https://hellosehat.com/images/bmi-obese_level_2-male-inactive.svg",
        img_active: "https://hellosehat.com/images/bmi-obese_level_2-male-active.svg",
        rule: "30 >",
    },
};
function getRadioValue(radioName) {
    let radios = document.getElementsByName(radioName);
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
    return null;
}

// Body Mass Index Calculator
function bmiCalculator(height, weight) {
    if (isNaN(height) || isNaN(weight) || typeof height !== "number" || typeof weight !== "number" || height < 0 || weight < 0) {
        return null;
    } else {
        return Math.round((weight / Math.pow(height * 0.01, 2)) * 100) / 100;
    }
}
function bmiClassification(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 23.9) {
        return "Healthy Weight";
    } else if (bmi >= 24 && bmi <= 26.9) {
        return "Overweight";
    } else if (bmi >= 27 && bmi <= 29.9) {
        return "Obese Type I";
    } else if (bmi >= 30) {
        return "Obese Type II";
    }
    return null;
}

// Ideal Body Weight Calculator
function ibwCalculator(height) {
    if (isNaN(height) || typeof height !== "number" || height < 0) {
        return null;
    } else {
        return {
            minimum: Math.round(18.5 * Math.pow(height * 0.01, 2) * 100) / 100,
            maximum: Math.round(23.9 * Math.pow(height * 0.01, 2) * 100) / 100,
        };
    }
}

// Lean Body Mass Calculator
function lbmCalculator(height, weight, gender) {
    if (isNaN(height) || isNaN(weight) || isNaN(gender) || typeof height !== "number" || typeof weight !== "number" || height < 0 || weight < 0 || gender < 0 || gender > 1) {
        return null;
    } else {
        let boerLBMKg, boerLBMPercent, boerLBMBodyFat, jamesLBMKg, jamesLBMPercent, jamesLBMBodyFat, humeLBMKg, humeLBMPercent, humeLBMBodyFat;
        // Formula Boer
        if (gender == 0) {
            let lbm = 0.407 * weight + 0.267 * height - 19.2;
            boerLBMKg = Math.round(lbm * 100) / 100;
            boerLBMPercent = Math.round((boerLBMKg / weight) * 100 * 100) / 100;
            boerLBMBodyFat = Math.round((100 - boerLBMPercent) * 100) / 100;
        } else if (gender == 1) {
            let lbm = 0.252 * weight + 0.473 * height - 48.3;
            boerLBMKg = Math.round(lbm * 100) / 100;
            boerLBMPercent = Math.round((boerLBMKg / weight) * 100 * 100) / 100;
            boerLBMBodyFat = Math.round((100 - boerLBMPercent) * 100) / 100;
        }
        // Formula James
        if (gender == 0) {
            let lbm = 1.1 * weight - 128 * Math.pow(weight / height, 2);
            jamesLBMKg = Math.round(lbm * 100) / 100;
            jamesLBMPercent = Math.round((jamesLBMKg / weight) * 100 * 100) / 100;
            jamesLBMBodyFat = Math.round((100 - jamesLBMPercent) * 100) / 100;
        } else if (gender == 1) {
            let lbm = 1.07 * weight - 148 * Math.pow(weight / height, 2);
            jamesLBMKg = Math.round(lbm * 100) / 100;
            jamesLBMPercent = Math.round((jamesLBMKg / weight) * 100 * 100) / 100;
            jamesLBMBodyFat = Math.round((100 - jamesLBMPercent) * 100) / 100;
        }
        // Formula Hume
        if (gender == 0) {
            let lbm = 0.3281 * weight + 0.33929 * height - 29.5336;
            humeLBMKg = Math.round(lbm * 100) / 100;
            humeLBMPercent = Math.round((humeLBMKg / weight) * 100 * 100) / 100;
            humeLBMBodyFat = Math.round((100 - humeLBMPercent) * 100) / 100;
        } else if (gender == 1) {
            let lbm = 0.29569 * weight + 0.41813 * height - 43.2933;
            humeLBMKg = Math.round(lbm * 100) / 100;
            humeLBMPercent = Math.round((humeLBMKg / weight) * 100 * 100) / 100;
            humeLBMBodyFat = Math.round((100 - humeLBMPercent) * 100) / 100;
        }
        const result = {
            1: {
                LBMKg: boerLBMKg,
                LBMPercent: boerLBMPercent,
                LBMBodyFat: boerLBMBodyFat,
            },
            2: {
                LBMKg: jamesLBMKg,
                LBMPercent: jamesLBMPercent,
                LBMBodyFat: jamesLBMBodyFat,
            },
            3: {
                LBMKg: humeLBMKg,
                LBMPercent: humeLBMPercent,
                LBMBodyFat: humeLBMBodyFat,
            },
        };
        return result;
    }
}

module.exports = {
    bmiCalculator,
    bmiClassification,
    ibwCalculator,
    lbmCalculator,
};
