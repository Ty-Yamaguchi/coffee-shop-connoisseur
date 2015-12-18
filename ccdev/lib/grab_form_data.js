if( Meteor.isClient ) {

    getFormData = function (formObject) {
        var formData = {};
        formObject.find('[name]').each(function () {
            var key = $(this).attr('name');
            var value = $(this).val();
            var isRadio = $(this).attr('type') === 'radio' ? true : false;
            var isChecked = $(this).is(':checked');
            if( !isRadio || ( isRadio && isChecked ) ) {
                formData[key] = value;
            }
        });
        return formData;
    }

}