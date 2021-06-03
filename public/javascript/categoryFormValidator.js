/* eslint-disable */
$(document).ready(function () {
  $('.ui.form').form({
    fields: {
      email: {
        identifier: 'name',
        rules: [
          {
            type: 'empty',
            prompt: 'Please enter a category name',
          },
        ],
      },
      password: {
        identifier: 'description',
        rules: [
          {
            type: 'empty',
            prompt: 'Please enter a description',
          },
        ],
      },
    },
  });
});
