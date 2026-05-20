import { useReducer, useRef, useState } from "react";
import "./RegisterWizard.css";

interface PersonalData {
  name: string;
  email: string;
  phone: string;
}

interface AddressData {
  street: string;
  city: string;
  zipCode: string;
}

interface WizardState {
  step: 1 | 2 | 3;
  data: {
    personal: PersonalData;
    address: AddressData;
  };
  completed: boolean;
}

type WizardAction =
  | { type: "NEXT_PERSONAL"; payload: PersonalData }
  | { type: "NEXT_ADDRESS"; payload: AddressData }
  | { type: "BACK" }
  | { type: "SUBMIT" };

function isPersonalValid(data: PersonalData): boolean {
  return (
    data.name.trim().length > 0 &&
    data.email.includes("@") &&
    data.phone.replace(/\D/g, "").length >= 10
  );
}

function isAddressValid(data: AddressData): boolean {
  return (
    data.street.trim().length > 0 &&
    data.city.trim().length > 0 &&
    data.zipCode.replace(/\D/g, "").length === 8
  );
}

function wizardReducer(state: WizardState, action: WizardAction): WizardState {
  switch (action.type) {
    case "NEXT_PERSONAL": {
      if (!isPersonalValid(action.payload)) return state;
      return {
        ...state,
        step: 2,
        data: { ...state.data, personal: action.payload },
      };
    }
    case "NEXT_ADDRESS": {
      if (!isAddressValid(action.payload)) return state;
      return {
        ...state,
        step: 3,
        data: { ...state.data, address: action.payload },
      };
    }
    case "BACK": {
      return {
        ...state,
        step: state.step > 1 ? ((state.step - 1) as 1 | 2 | 3) : state.step,
      };
    }
    case "SUBMIT": {
      return { ...state, completed: true };
    }
    default:
      return state;
  }
}

const initialWizardState: WizardState = {
  step: 1,
  data: {
    personal: { name: "", email: "", phone: "" },
    address: { street: "", city: "", zipCode: "" },
  },
  completed: false,
};

export function RegisterWizard() {
  const [state, dispatch] = useReducer(wizardReducer, initialWizardState);

  if (state.completed) {
    return (
      <div className="wizard">
        <div className="wizard__sucess">
          <div className="wizard__sucess-icon">✓</div>
          <h2 className="wizard__sucess_title">
            Bem-Vindo, {state.data.personal.name}!
          </h2>
          <p className="wizard__sucess_sub">Cadastro concluido com sucesso.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="wizard">
      <div className="wizard__progress">
        {([1, 2, 3] as const).map((s) => (
          <div
            key={s}
            className={`wizard__progress-segment ${s <= state.step ? "wizard__progress-segment--active" : ""}`}
          />
        ))}
      </div>
      {state.step === 1 && (
        <Step1
          onNext={(data) => dispatch({ type: "NEXT_PERSONAL", payload: data })}
        />
      )}

      {state.step === 2 && (
        <Step2
          onNext={(data) => dispatch({ type: "NEXT_ADDRESS", payload: data })}
          onBack={() => dispatch({ type: "BACK" })}
        />
      )}

      {state.step === 3 && (
        <StepConfirm
          data={state.data}
          onBack={() => dispatch({ type: "BACK" })}
          onSubmit={() => dispatch({ type: "SUBMIT" })}
        />
      )}
    </div>
  );
}

interface Step1Props {
  onNext: (data: PersonalData) => void;
}

function Step1({ onNext }: Step1Props) {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);

  function handleNext() {
    const data: PersonalData = {
      name: nameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
      phone: phoneRef.current?.value ?? "",
    };
    if (!isPersonalValid(data)) {
      setError(true);
      return;
    }
    setError(false);
    onNext(data);
  }

  return (
    <>
      <h2 className="wizard__step-title">Dados Pessoais</h2>
      <div className="wizard__field">
        <label className="wizard__label" htmlFor="name">
          Nome Completo
        </label>
        <input
          id="street"
          ref={nameRef}
          className="wizard__input"
          placeholder="Seu nome completo"
        />
      </div>

      <div className="wizard__field">
        <label className="wizard__label" htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          ref={emailRef}
          className="wizard__input"
          placeholder="seu@email.com"
        />
      </div>

      <div className="wizard__field">
        <label className="wizard__label" htmlFor="phone">
          Telefone
        </label>
        <input
          id="phone"
          ref={phoneRef}
          className="wizard__input"
          placeholder="+55 11 91234-5678"
        />
      </div>
      {error && (
        <p className="wizard__error-msg">
          Preencha todos os campos corretamente antes de continuar.
        </p>
      )}
      <div className="wizard__actions">
        <button
          className="wizard__btn wizard__btn--primary"
          onClick={handleNext}
        >
          Próximo
        </button>
      </div>
    </>
  );
}

interface Step2Props {
  onNext: (data: AddressData) => void;
  onBack: () => void;
}

function Step2({ onNext, onBack }: Step2Props) {
  const streetRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const zipRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);

  function handleNext() {
    const data: AddressData = {
      street: streetRef.current?.value ?? "",
      city: cityRef.current?.value ?? "",
      zipCode: zipRef.current?.value ?? "",
    };
    if (!isAddressValid(data)) {
      setError(true);
      return;
    }
    setError(false);
    onNext(data);
  }
  return (
    <>
      <h2 className="wizard__step-title">Endereço</h2>

      <div className="wizard__field">
        <label className="wizard__label" htmlFor="street">
          Rua
        </label>
        <input
          id="street"
          ref={streetRef}
          className="wizard__input"
          placeholder="Rua Exemplo, 100"
        />
      </div>

      <div className="wizard__field">
        <label className="wizard__label" htmlFor="city">
          Cidade
        </label>
        <input
          id="city"
          ref={cityRef}
          className="wizard__input"
          placeholder="São Paulo"
        />
      </div>

      <div className="wizard__field">
        <label className="wizard__label" htmlFor="zip">
          CEP
        </label>
        <input
          id="zip"
          ref={zipRef}
          className="wizard__input"
          placeholder="01310-100"
        />
      </div>

      {error && (
        <p className="wizard__error-msg">
          Preencha todos os campos corretamente. CEP deve ter 8 dígitos.
        </p>
      )}

      <div className="wizard__actions">
        <button className="wizard__btn wizard__btn--ghost" onClick={onBack}>
          Voltar
        </button>
        <button
          className="wizard__btn wizard__btn--primary"
          onClick={handleNext}
        >
          Próximo
        </button>
      </div>
    </>
  );
}

interface StepConfirmProps {
  data: WizardState["data"];
  onBack: () => void;
  onSubmit: () => void;
}

function StepConfirm({ data, onBack, onSubmit }: StepConfirmProps) {
  return (
    <>
      <h2 className="wizard__step-title">Confirme seus dados</h2>

      <div className="wizard__confirm-block">
        <div className="wizard__confirm-row">
          <span className="wizard__confirm-label">Nome</span>
          <span>{data.personal.name}</span>
        </div>
        <div className="wizard__confirm-row">
          <span className="wizard__confirm-label">E-mail</span>
          <span>{data.personal.email}</span>
        </div>
        <div className="wizard__confirm-row">
          <span className="wizard__confirm-label">Telefone</span>
          <span>{data.personal.phone}</span>
        </div>
        <div className="wizard__confirm-row">
          <span className="wizard__confirm-label">Rua</span>
          <span>{data.address.street}</span>
        </div>
        <div className="wizard__confirm-row">
          <span className="wizard__confirm-label">Cidade</span>
          <span>{data.address.city}</span>
        </div>
        <div className="wizard__confirm-row">
          <span className="wizard__confirm-label">CEP</span>
          <span>{data.address.zipCode}</span>
        </div>
      </div>

      <div className="wizard__actions">
        <button className="wizard__btn wizard__btn--ghost" onClick={onBack}>
          Voltar
        </button>
        <button className="wizard__btn wizard__btn--primary" onClick={onSubmit}>
          Confirmar
        </button>
      </div>
    </>
  );
}
