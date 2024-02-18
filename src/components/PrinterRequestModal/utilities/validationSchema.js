import * as yup from 'yup';

const capitalize = value => value.charAt(0).toUpperCase() + value.slice(1);

yup.addMethod(yup.string, 'lengthIfNotEmpty', function (param, errorMessage) {
  return this.test('length-If-Not-Empty', errorMessage, function (value) {
    const { path, createError } = this;

    if (value.length > 0 && value.length < param) {
      return createError({ path, message: errorMessage });
    }

    return true;
  });
});

export const validationSchema = yup
  .object({
    name: yup
      .string()
      .trim()
      .lengthIfNotEmpty(2, "Закоротке ім'я")
      .transform(capitalize)
      .max(30, "Задовге ім'я")
      .required("Вкажіть ім'я"),

    phone: yup
      .string()
      .trim()
      .lengthIfNotEmpty(19, 'Неправильний формат')
      .required('Вкажіть номер телефону'),

    printer: yup.string().trim().transform(capitalize),
  })
  .required();
