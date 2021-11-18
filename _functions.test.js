const functions = require("./functions");

describe("Testing Body Mass Index function", () => {
    //? Body Mass Index Parameter
    // Parameter pertama adalah tinggi badan
    // Parameter kedua adalah berat badan

    //? Body Mass Index Classification Parameter
    // Parameter pertama adalah Body Mass Index nya

    test("Input must be a number", () => {
        expect(functions.bmiCalculator("satu", 45)).toBeNull();
    });

    test("Input less than 0", () => {
        expect(functions.bmiCalculator(-1, -1)).toBeNull();
    });

    test("Input greater than or equal 0", () => {
        expect(functions.bmiCalculator(150, 45)).toBeGreaterThanOrEqual(0);
    });

    test("[Height = 150, Weight = 45] => Output should be 20", () => {
        expect(functions.bmiCalculator(150, 45)).toBe(20);
    });

    test("Output BMI Classification cannot be null", () => {
        const bmi = functions.bmiCalculator(150, 45);
        expect(functions.bmiClassification(bmi)).not.toBeNull();
    });

    test("the classification list has Output BMI Classification on it", () => {
        const classification = ["Underweight", "Healthy Weight", "Overweight", "Obese Type I", "Obese Type II"];
        const bmi = functions.bmiCalculator(1, 45);
        expect(classification).toContain(functions.bmiClassification(bmi));
    });

    test("[BMI = 20] => Output should be Healthy Weight", () => {
        const bmi = functions.bmiCalculator(150, 45);
        expect(functions.bmiClassification(bmi)).toBe("Healthy Weight");
    });
});

describe("Testing Ideal Body Weight function", () => {
    //? Ideal Body Weight Parameter
    // Parameter pertama adalah tinggi badan

    test("Input must be a number", () => {
        expect(functions.ibwCalculator("satu")).toBeNull();
    });
    test("Input must be greater than or equal 0", () => {
        expect(functions.ibwCalculator(-1)).toBeNull();
    });
    test("[Height: 150] Output must be same", () => {
        const ideal = {
            minimum: 41.63,
            maximum: 53.78,
        };
        expect(functions.ibwCalculator(150)).toMatchObject(ideal);
    });
});

describe("Testing Lean Body Mass function", () => {
    //? Lean Body Mass Parameter
    // Parameter pertama adalah tinggi badan
    // Parameter kedua adalah berat badan
    // Parameter ketiga adalah gender

    //? GENDER
    //* 0 = Laki-Laki
    //* 1 = Perempuan

    //? Formula Boer
    const formula = 1;

    test("Input must be a number", () => {
        expect(functions.lbmCalculator("asd", 45, 0)).toBeNull();
    });
    test("Input greater than or equal 0", () => {
        expect(functions.lbmCalculator(-1, -45, 0)).toBeNull();
    });
    test("Gender must be 0 or 1", () => {
        expect(functions.lbmCalculator(150, 45, 2)).toBeNull();
    });
    test("Output formula boer must be same ", () => {
        const LeanBodyMass = {
            LBMKg: 39.17,
            LBMPercent: 87.04,
            LBMBodyFat: 12.96,
        };
        expect(functions.lbmCalculator(150, 45, 0)[formula]).toMatchObject(LeanBodyMass);
    });
});
