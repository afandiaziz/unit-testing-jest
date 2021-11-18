// Event
$(document).ready(function () {
    $("#bmi-calc").click(function () {
        $("#bmi-result > div").html("");
        let result = bmiCalculator(parseFloat($("#bmi-height").val()), parseFloat($("#bmi-weight").val()));
        if (result) {
            let classification = bmiClassification(result);
            $("#bmi-result").fadeIn();
            $("#bmi-result span").text(result);
            for (let i = 0; i < 5; i++) {
                if (classification == bmiData[i].name) {
                    $("#bmi-result > div").append(`<div class="px-3 text-center">
                                                    <img src="${bmiData[i].img_active}" />
                                                    <div class="mt-2 text-dark fw-bold">
                                                        ${bmiData[i].name}
                                                        <br />
                                                        ${bmiData[i].rule}
                                                </div>`);
                } else {
                    $("#bmi-result > div").append(`<div class="px-3 text-center">
                                                    <img src="${bmiData[i].img_inactive}" />
                                                    <div class="mt-2 text-muted">
                                                        ${bmiData[i].name}
                                                        <br />
                                                        ${bmiData[i].rule}
                                                </div>`);
                }
            }
        } else {
            alert("Please enter a valid number");
            $("#bmi-height").val("").focus();
            $("#bmi-weight").val("");
            $("#bmi-result").fadeOut();
        }
    });
    $("#ibw-calc").click(function () {
        let result = ibwCalculator(parseFloat($("#ibw-height").val()));
        if (result) {
            $("#ibw-result").fadeIn();
            $("#ibw-result div").text(`${result.minimum} - ${result.maximum} kg`);
        } else {
            alert("Please enter a valid number");
            $("#ibw-result").fadeOut();
            $("#ibw-height").val("").focus();
        }
    });

    $("#lbm-calc").click(function () {
        let result = lbmCalculator(parseFloat($("#lbm-height").val()), parseFloat($("#lbm-weight").val()), getRadioValue("lbm-gender"));
        if (result) {
            $("#lbm-result").fadeIn();
            $("#lbm-kg").text(result[$("#lbm-formula").val()].LBMKg + " kg");
            $("#lbm-percent").text(result[$("#lbm-formula").val()].LBMPercent + "%");
            $("#lbm-fat").text(result[$("#lbm-formula").val()].LBMBodyFat + "%");

            for (let i = 1; i < 4; i++) {
                $(`tr#result-table-${i}`).removeClass("table-primary fw-bold");
                $(`tr#result-table-${i} .table-lbm`).html(`${result[i].LBMKg} kg <sub>(${result[i].LBMPercent}%)</sub>`);
                $(`tr#result-table-${i} .table-fat`).html(`${result[i].LBMBodyFat}%`);
            }
            $("tr#result-table-" + $("#lbm-formula").val()).addClass("table-primary fw-bold");
        } else {
            alert("Please enter a valid number");
            $("#lbm-height").val("").focus();
            $("#lbm-weight").val("");
            $("#lbm-result").fadeOut();
        }
    });
});
