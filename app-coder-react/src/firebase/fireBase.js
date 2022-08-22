import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDeMx4tszUj70h-WT6miI5T8l42-Cx_btI",
  authDomain: "tiendamorfi.firebaseapp.com",
  projectId: "tiendamorfi",
  storageBucket: "tiendamorfi.appspot.com",
  messagingSenderId: "380967658801",
  appId: "1:380967658801:web:1778f5f4fb223f36713c10"
};


const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app
}

