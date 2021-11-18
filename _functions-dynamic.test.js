const functions = require("./functions");
describe("Dynamic Testing Body Mass Index function", () => {
    test.each([
        [150, 55, 24.44],
        [189, 85, 23.8],
        [173, 73, 24.39],
    ])(`Body Mass Index (%scm and %skg) is %s`, (height, weight, expected) => {
        expect(functions.bmiCalculator(height, weight)).toBe(expected);
    });

    test.each([
        [24.44, "Overweight"],
        [23.8, "Healthy Weight"],
        [24.39, "Overweight"],
    ])(`Body Mass Index Classification (%i) is %s`, (BMI, expected) => {
        expect(functions.bmiClassification(BMI)).toBe(expected);
    });
});

describe("Dynamic Testing Ideal Body Weight function", () => {
    const data = [
        [
            150,
            {
                minimum: 41.63,
                maximum: 53.78,
            },
        ],
        [
            189,
            {
                minimum: 66.08,
                maximum: 85.37,
            },
        ],
        [
            173,
            {
                minimum: 55.37,
                maximum: 71.53,
            },
        ],
    ];
    test.each(data)(`Ideal Body Weight (%scm) is %s`, (height, expected) => {
        expect(functions.ibwCalculator(height)).toMatchObject(expected);
    });
});

describe("Dynamic Testing Lean Body Mass function", () => {
    //? Lean Body Mass Parameter
    // Parameter pertama adalah tinggi badan
    // Parameter kedua adalah berat badan
    // Parameter ketiga adalah gender

    //? GENDER
    //* 0 = Laki-Laki
    //* 1 = Perempuan
    const data = [
        [
            189,
            76,
            0,
            1,
            {
                LBMKg: 62.19,
                LBMPercent: 81.83,
                LBMBodyFat: 18.17,
            },
        ],
        [
            156,
            66,
            1,
            2,
            {
                LBMKg: 44.13,
                LBMPercent: 66.86,
                LBMBodyFat: 33.14,
            },
        ],
        [
            174,
            78,
            1,
            3,
            {
                LBMKg: 52.53,
                LBMPercent: 67.35,
                LBMBodyFat: 32.65,
            },
        ],
    ];
    //? Formula
    // 1 = Boer
    // 2 = James
    // 3 = Hume
    test.each(data)(`Lean Body Mass (%scm, %skg, gender: %s) formula: %s, result: %s `, (height, weight, gender, formula, expected) => {
        expect(functions.lbmCalculator(height, weight, gender)[formula]).toMatchObject(expected);
    });
});
