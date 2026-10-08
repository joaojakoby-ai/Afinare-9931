// Única fonte de dados confirmados da Afinare.
export const CLINIC = {
  name: "Afinare",
  category: "Centro de saúde e beleza",
  street: "R. Almiro de Moraes, 146",
  district: "Setor Central",
  city: "Rio Verde – GO",
  cep: "75901-150",
  phoneDisplay: "(64) 3018-4353",
  phoneTel: "+556430184353",
  rating: "4,7",
  reviews: 71,
  closesAt: "19h",
  // Preencha quando a clínica confirmar. Vazio = botão não aparece.
  whatsappNumber: "", // ex.: "5564999999999"
  email: "", // ex.: "contato@..."
} as const;

export const FULL_ADDRESS = `${CLINIC.street} – ${CLINIC.district}, ${CLINIC.city}, CEP ${CLINIC.cep}`;
const q = encodeURIComponent(`Afinare, ${CLINIC.street}, ${CLINIC.district}, Rio Verde - GO, ${CLINIC.cep}`);
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${q}`;
export const MAPS_EMBED = `https://www.google.com/maps?q=${q}&output=embed`;
export const TEL_LINK = `tel:${CLINIC.phoneTel}`;
