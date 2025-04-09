

const scriptsInEvents = {

	async Jogo_Event12_Act2(runtime, localVars)
	{
		//obter o valor da variavel global pontos
		let pontos = runtime.globalVars.pontos;
		
		//contagem de pontos
		pontos++;
		
		//atualiza a variavel global no construct 3
		runtime.globalVars.pontos = pontos;
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
