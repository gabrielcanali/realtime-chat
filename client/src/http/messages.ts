import IMessage from "../interfaces/IMessage";

export default async function getMessages(channel: string): Promise<IMessage[]> {
    console.log(channel)
    //TODO: Get messages from the server

    return new Promise((resolve) => {
        setTimeout(() => {
          const messages = [
            {
                id: 1,
                userId: 1,
                content: "Olá, tudo bem?",
                created_at: new Date(),
            },
            {
                id: 2,
                userId: 2,
                content: "Oi, tudo sim e com você?",
                created_at: new Date(),
            },
            {
                id: 3,
                userId: 1,
                content: "Tudo bem também!",
                created_at: new Date(),
            },
            {
                id: 4,
                userId: 1,
                content: "Sou um representante da Amazon e gostaria de saber se você tem interesse na seguinte oferta:",
                created_at: new Date(),
            },
            {   
                id: 5,
                userId: 1,
                content: "Benefícios: Salário (Opcional), Seguro de vida e Experiência",
                created_at: new Date(),
            },
            {
                id: 6,
                userId: 2,
                content: "Não, valeu 👍",
                created_at: new Date(),
            },
            {
                id: 7,
                userId: 1,
                content: "😢",
                created_at: new Date(),
            }
        ];
          resolve(messages);
        }, 3000);
    });
}