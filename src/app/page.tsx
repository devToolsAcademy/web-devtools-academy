import InputComponent from '../shared/ui/Input/Input';

import IconMail from '../shared/ui/icon/mail';
import IconUser from '../shared/ui/icon/user';
// import '../shared/ui/styles/InputComponent.css';

export default function Home() {
  return (
    <main>
      Devtools
      <InputComponent
        label="Contraseña"
        type="text"
        variant="underlined"
        placeholder="Ingrese su contraseña"
        // endContent={<IconUser />}
      />
      <InputComponent
        label="hola"
        required={true}
        startContent={<IconUser className="text-xl text-default-400 pointer-events-none flex-shrink-0" />}
      />
      <InputComponent label="" endContent={<IconMail />} />
    </main>
  );
}
