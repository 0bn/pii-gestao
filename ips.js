export const ipMaquina = 'seu ip aqui'; 
// teoricamente esse arquivo muda a variavel nos arquivos que importam ele, mas não está funcionando pelo uq parece? (nos meus testes fuincionou normalmente -marcos)
// exames, signup e login usam essa variavel, importanto a variavel "import { ipMaquina } from '../ips';"
// se nao funcionar, tentar colocar a variavel em cada arquivo manualmente, so trocar {ipMaquina} pelo ip da maquina na linha de codigo que usa a variavel
// para testar banco de dados, pode tanto trocar rootstack para o login e testar login quando abrir o expo ou dar upload do laudo do mateus na pagina de exames
// e estamos com um problema de o servidor acabar o tempo de uso, então provavelmente usaremos o localhost da propria maquina, tendo q rodar os scrips com as tabelas etc no sql workbench...
// caso isso aconteça, trocar o ipMaquina para '(vou ver ainda como fica o localhost)' e rodar o script de criação de tabelas no banco de dados
// e atualizar o server.js para usar o localhost