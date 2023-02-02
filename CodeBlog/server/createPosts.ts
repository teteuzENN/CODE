import prisma from "./prisma";

async function main() {
  const post = await prisma.posts.create({
    data: {
      title: `# Subtract Numbers`,
      description: `## Take numbers A and B and return the result of A - B`,
      content: `Você sabe como escrever um post de blog? Saiba que é importante investir em um blog para alavancar o sucesso da sua estratégia de marketing. Sem ele, a posição do site nos mecanismos de busca fica estagnada e não há muito o que promover nas redes sociais. Além disso, você perde a influência sobre o público-alvo e clientes potenciais.`,
    },
  });
  console.log(post);
}

main();
