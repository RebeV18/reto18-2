import { useForm } from react-hook-form;

export const FormHook = () => {
  const {register, errors, handleSubmit} = useForm();
    

  return (
    <>
      <h1>Buscar película</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Digite el nombre de la película"
          className="form-control my-2"
          type="text"
          name="nombre"
          onChange={handleBuscar}
        />
        <button className="btn" type="onSubmit">
          Buscar
        </button>
      </form>
    </>
  );
}