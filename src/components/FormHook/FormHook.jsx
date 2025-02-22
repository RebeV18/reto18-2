import { useForm } from react-hook-form;

export const FormHook = () => {
  const {register, errors, handleSubmit} = useForm();
  
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  }

  return (
    <>
      <h1>Buscar película</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Digite el nombre de la película"
          className="form-control my-2"
          type="text"
          name="nombre"
          ref={
            register=({
              required: {value: true, message: 'Ingrese nombre de la película'}
            })
          }  
        />
        <span className="text-danger text-small d-block mb-2">
          {errors?.nombre?.message}
        </span>
        <button className="btn" type="onSubmit">
          Buscar
        </button>
      </form>
    </>
  );
}