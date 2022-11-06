import { useQuasar } from "quasar";
export default function useNotify(){
  const $q = useQuasar();

  const notifySuccess = (message) => {
    $q.notify({
      type: 'positive',
      position: "bottom-right",
      message: message || 'Operação concluída com sucesso !'
    })
  }

  const notifyError = (message) => {
    $q.notify({
      type: 'negative',
      position: "bottom-right",
      message: message || 'Ocorreu um erro !'
    })
  }

  return {
    notifySuccess,
    notifyError
  }
}
