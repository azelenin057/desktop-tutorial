$(function () {
    country = $.url(location.href).param('country');

    if (country == 'KZ') {
        kz_selected = 'selected="selected"';
    } else {
        kz_selected = '';
    }
    if (country == 'UA') {
        ua_selected = 'selected="selected"';
    } else {
        ua_selected = '';
    }

    if (country == 'MD') {
        md_selected = 'selected="selected"';
    } else {
        md_selected = '';
    }
    if (country == 'GE') {
        ge_selected = 'selected="selected"';
    } else {
        ge_selected = '';
    }
    if (country == 'BY') {
        by_selected = 'selected="selected"';
    } else {
        by_selected = '';
    }
    if (country == 'AM') {
        am_selected = 'selected="selected"';
    } else {
        am_selected = '';
    }
    if (country == 'AZ') {
        az_selected = 'selected="selected"';
    } else {
        az_selected = '';
    }
    if (country == 'KG') {
        kg_selected = 'selected="selected"';
    } else {
        kg_selected = '';
    }
    if (country == 'UZ') {
        uz_selected = 'selected="selected"';
    } else {
        uz_selected = '';
    }


    selects = $("select[name='country']");
    selects.append('<option value="RU">Россия</option>');

    selects.append('<option value="KZ" ' + kz_selected + '>Казахстан</option>');
   // selects.append('<option value="UA" ' + ua_selected + '>Украина</option>');
   // selects.append('<option value="BY" ' + by_selected + '>Беларусь</option>');
    // selects.append('<option value="MD" ' + md_selected + '>Молдова</option>');
    // selects.append('<option value="GE" ' + ge_selected + '>Грузия</option>');
    selects.append('<option value="AM" ' + am_selected + '>Армения</option>');
    // selects.append('<option value="AZ" ' + az_selected + '>Азербайджан</option>');
   // selects.append('<option value="KG" ' + kg_selected + '>Кыргызстан</option>');
    selects.append('<option value="UZ" ' + uz_selected + '>Узбекистан</option>');

    var change = 0,
        updatePrices = function (item) {
            change = 1;

            $(item.children).each(function () {
                if (this.selected) sel = $(this).val();
            });

            if (typeof sel === 'undefined') {
                sel = 'RU';
            }

            if (sel == 'RU') {
                $('.old_price_val').html('1980');
                $('.old_price_cur').html('руб');
                $('.old_price_sig').html('руб');
                $('.new_price_val').html('149');
                $('.new_price_cur').html('руб*');
                $('.new_price_sig').html('руб');
                $('select[name="country"]').val('RU').trigger('change');
                initializeMask('remove')

            }

            if (sel == 'KZ') {
                $('.old_price_val').html('10580');
                $('.old_price_cur').html('тнг');
                $('.old_price_sig').html('тнг');
                $('.new_price_val').html('830');
                $('.new_price_cur').html('тнг*');
                $('.new_price_sig').html('тнг');
                $('select[name="country"]').val('KZ').trigger('change');
                initializeMask('remove')
            }

            if (sel == 'UA') {
                $('.old_price_val').html('830');
                $('.old_price_cur').html('грн');
                $('.old_price_sig').html('грн');
                $('.new_price_val').html('69');
                $('.new_price_cur').html('грн*');
                $('.new_price_sig').html('грн');
                $('select[name="country"]').val('UA').trigger('change');
                initializeMask({ mask: "(+38)@$9{8}", removeMaskOnSubmit: false,  definitions: {
                    '@': {
                      validator: "[0]",
                      casing: "lower"
                    },
                    '$': {
                        validator: "[3-9]",
                        casing: "lower" 
                    } 
                }})
            }

            if (sel == 'MD') {
                $('.old_price_val').html('9');
                $('.old_price_cur').html('лей');
                $('.old_price_sig').html('лей');
                $('.new_price_val').html('9');
                $('.new_price_cur').html('лей*');
                $('.new_price_sig').html('лей');
                $('select[name="country"]').val(sel).trigger('change');
                initializeMask('remove')
            }

            if (sel == 'GE') {
                $('.old_price_val').html('90');
                $('.old_price_cur').html('gel');
                $('.old_price_sig').html('gel');
                $('.new_price_val').html('39');
                $('.new_price_cur').html('gel*');
                $('.new_price_sig').html('gel');
                $('select[name="country"]').val(sel).trigger('change');
                initializeMask('remove')
            }

            if (sel == 'BY') {
                $('.old_price_val').html('140');
                $('.old_price_cur').html('р');
                $('.old_price_sig').html('р');
                $('.new_price_val').html('5');
                $('.new_price_cur').html('р*');
                $('.new_price_sig').html('р');
                $('select[name="country"]').val(sel).trigger('change');
                initializeMask('remove')
            }

            if (sel == 'AM') {
                $('.old_price_val').html('25000');
                $('.old_price_cur').html('др');
                $('.old_price_sig').html('др');
                $('.new_price_val').html('980');
                $('.new_price_cur').html('др*');
                $('.new_price_sig').html('др');
                $('select[name="country"]').val(sel).trigger('change');
                initializeMask({
                    mask: "(+374)99999999[9]",
                    removeMaskOnSubmit: false
                })
            }

            if (sel == 'AZ') {
                $('.old_price_val').html('69');
                $('.old_price_cur').html('манат');
                $('.old_price_sig').html('манат');
                $('.new_price_val').html('29');
                $('.new_price_cur').html('манат*');
                $('.new_price_sig').html('манат');
                $('select[name="country"]').val(sel).trigger('change');
                initializeMask('remove')
            }

            if (sel == 'KG') {
                $('.old_price_val').html('2758');
                $('.old_price_cur').html('сом');
                $('.old_price_sig').html('сом');
                $('.new_price_val').html('170');
                $('.new_price_cur').html('сом*');
                $('.new_price_sig').html('сом');
                $('select[name="country"]').val(sel).trigger('change');
                initializeMask({
                    mask: "(+\\9\\96)999999999[9]",
                    removeMaskOnSubmit: false
                })
            }

            if (sel == 'UZ') {
                $('.old_price_val').html('99000');
                $('.old_price_cur').html('сум');
                $('.old_price_sig').html('сум');
                $('.new_price_val').html('20000');
                $('.new_price_cur').html('сум*');
                $('.new_price_sig').html('сум');
                $('select').val(sel).trigger('change');
                initializeMask({ mask: "(+\\9\\98)999999999", removeMaskOnSubmit: false })
            }

            change = 0;
        };
    $("select[name='country']").change(function () {

        if (change == 0) updatePrices(this);
    }).change();

    function initializeMask(mask) {
        $('[name=phone]').inputmask(mask);
    }
    $(document).ready(function () {
        $("[name=phone]").keydown(function (event) {
            if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
                (event.keyCode == 65 && event.ctrlKey === true) ||
                (event.keyCode >= 35 && event.keyCode <= 39)) {
                return;
            } else {
                if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                    event.preventDefault();
                }
            }
        });
    });
});