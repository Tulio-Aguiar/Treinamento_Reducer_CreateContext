import { useReducer } from "react";
import "./styles/registerForm.css";

interface FormFields {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

type FormErrors = Partial<Record<keyof FormFields, string>>;

interface FormState {
  fields: FormFields;
  errors: FormErrors;
  touched: Partial<Record<keyof FormFields, boolean>>;
  submitting: boolean;
  submitted: boolean;
}

type FormAction =
  | { type: "CHANGE"; payload: { field: keyof FormFields; value: string } }
  | { type: "BLUR"; payload: keyof FormFields }
  | { type: "SUBMIT_START" }
  | { type: "SUBMIT_SUCCESS" }
  | { type: "SUBMIT_ERROR"; payload: string };

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};
  if (!fields.name.trim()) {
    errors.name = "Nome é obrigatório";
  }
  if (!fields.email.includes("@")) {
    errors.email = "E-Mail inválido";
  }
  if (fields.password.length < 8) {
    errors.password = "Senha deve conter ao menos 8 caracteres";
  }
  if (fields.password !== fields.confirmPassword) {
    errors.confirmPassword = "As senhas não coincidem";
  }
  return errors;
}

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "CHANGE": {
      const updatedFields = {
        ...state.fields,
        [action.payload.field]: action.payload.value,
      };
      return {
        ...state,
        fields: updatedFields,
        errors: validate(updatedFields),
      };
    }
    case "BLUR": {
      return {
        ...state,
        touched: { ...state.touched, [action.payload]: true },
        errors: validate(state.fields),
      };
    }
    case "SUBMIT_START": {
      return {
        ...state,
        submitting: true,
        touched: {
          name: true,
          email: true,
          password: true,
          confirmPassword: true,
        },
        errors: validate(state.fields),
      };
    }
    case "SUBMIT_SUCCESS": {
      return {
        ...state,
        submitting: false,
        submitted: true,
      };
    }
    case "SUBMIT_ERROR": {
      return {
        ...state,
        submitting: false,
      };
    }
    default:
      return state;
  }
}

const initialFormState: FormState = {
  fields: { name: "", email: "", password: "", confirmPassword: "" },
  errors: {},
  touched: {},
  submitting: false,
  submitted: false,
};

export default function RegisterForm() {
  const [state, dispatch] = useReducer(formReducer, initialFormState);
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT_START" });

    const errors = validate(state.fields);
    if (Object.keys(errors).length > 0) return;

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch({ type: "SUBMIT_SUCCESS" });
    } catch {
      dispatch({ type: "SUBMIT_ERROR", payload: "Erro ao cadastrar" });
    }
  };
  if (state.submitted) {
    return (
      <div className="form-wrapper">
        <div className="form-card">
          <p className="form-success">Cadastro realizado com sucesso!</p>
        </div>
      </div>
    );
  }
  return (
    <div className="form-wrapper">
      <div className="form-card">
        <h2 className="form-title">Criar conta</h2>
        <p className="form-subtitle">
          Preencha os dados abaixo para se cadastrar
        </p>
        <form className="form-body" onSubmit={handleSubmit}>
          {(["name", "email", "password", "confirmPassword"] as const).map(
            (field) => (
              <div key={field} className="form-field">
                <label className="formlabel" htmlFor={field}>
                  {field === "name"
                    ? "Nome"
                    : field === "email"
                      ? "E-mail"
                      : field === "password"
                        ? "Senha"
                        : "Confirmar Senha"}
                </label>
                <input
                  id={field}
                  className={`${state.touched[field] && state.errors[field] ? "form-input--error" : ""}`}
                  type={field.includes("assword") ? "password" : "text"}
                  placeholder={
                    field === "name"
                      ? "Seu nome completo"
                      : field === "email"
                        ? "email@exemplo.com"
                        : field === "password"
                          ? "Mínimo 8 caracteres"
                          : "Repita a senha"
                  }
                  value={state.fields[field]}
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE",
                      payload: { field, value: e.target.value },
                    })
                  }
                  onBlur={() => dispatch({ type: "BLUR", payload: field })}
                />
                {state.touched[field] && state.errors[field] && (
                  <span className="form-error">{state.errors[field]}</span>
                )}
              </div>
            ),
          )}
          <button
            className="form-submit"
            type="submit"
            disabled={state.submitting}
          >
            {state.submitting ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
