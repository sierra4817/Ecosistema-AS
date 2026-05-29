// Dynamic Course Manager - Visión Trading Pro (30-Day Intensive)

// 30 Days Syllabus Data
const courseData = {
  day1: {
    id: "day1",
    pilar: 1,
    title: "El Precio es lo Único que Importa",
    unlocked: true,
    completed: false,
    challenge: "Identifica y documenta un sesgo de falsas expectativas que hayas tenido en tu operativa reciente o en tu fase de aprendizaje.",
    content: `
      <p>Comenzamos el <strong>Módulo 1: Mentalidad Ganadora</strong>. Como trader estoico, debes grabarte esta regla de oro: <strong>el precio es lo único que importa</strong>. El mercado no sabe quién eres, cuánto dinero necesitas, ni qué opinas sobre la economía mundial.</p>
      <h3>Desmitificando Sesgos y Expectativas</h3>
      <p>El principal enemigo del operador novato es su propia mente. Las falsas expectativas de dinero fácil y rápido deforman la realidad. Creer que el mercado se mueve de forma injusta o que el precio \"debe\" rebotar en un soporte es un error cognitivo destructivo.</p>
      <ul>
        <li><strong>Aceptación del Precio:</strong> El precio actual es la verdad objetiva del mercado. Si el precio sube contra tu posición corta, tu opinión es errónea, no el precio.</li>
        <li><strong>Desapego de Opiniones:</strong> No intentes tener la razón; busca ser rentable operando lo que ves, no lo que crees.</li>
      </ul>
      <div class="alert-box">
        <strong>📈 Regla Estoica:</strong> Controla tus reacciones internas. El mercado es un reflejo de flujos de capital, no una entidad que conspira contra ti.
      </div>
    `
  },
  day2: {
    id: "day2",
    pilar: 1,
    title: "Sesgos Cognitivos en el Trading",
    unlocked: false,
    completed: false,
    challenge: "Identifica y documenta un sesgo cognitivo propio (como el sesgo de confirmación o de aversión a la pérdida) durante tu análisis de mercado.",
    content: `
      <p>Hoy analizaremos los <strong>sesgos cognitivos</strong>. Son atajos mentales que nuestro cerebro utiliza de forma automática, pero que en el trading resultan fatales para el capital operativo.</p>
      <h3>Sesgos Principales</h3>
      <ul>
        <li><strong>Sesgo de Aversión a la Pérdida:</strong> Dolor desproporcionado ante una pérdida que te lleva a mover tu Stop Loss esperando un milagro.</li>
        <li><strong>Sesgo de Reciente:</strong> Darle más importancia a los resultados de las últimas operaciones, modificando tu estrategia tras solo 2 fallos consecutivos.</li>
      </ul>
      <p>Un trader pragmático neutraliza los sesgos utilizando reglas escritas y una bitácora objetiva.</p>
    `
  },
  day3: {
    id: "day3",
    pilar: 1,
    title: "La Ilusión de la Certeza",
    unlocked: false,
    completed: false,
    challenge: "Escribe en tu bitácora por qué una operación individual con setup perfecto puede ser perdedora y cómo afecta esto a tu mentalidad.",
    content: `
      <p>El mercado es un <strong>entorno de probabilidades, no de certezas</strong>. Cada operación individual tiene un resultado aleatorio e independiente de las anteriores.</p>
      <h3>La Distribución de Resultados</h3>
      <p>Incluso con un sistema de trading que tenga un 60% de acierto estadístico a largo plazo, es matemáticamente posible (y normal) experimentar rachas de 4 o 5 operaciones perdedoras consecutivas sin que el sistema esté roto.</p>
    `
  },
  day4: {
    id: "day4",
    pilar: 1,
    title: "Anatomía de la Manipulación de Mercado",
    unlocked: false,
    completed: false,
    challenge: "Busca en tu gráfico un caso de rompimiento falso (caza de stops) y documenta cómo reaccionó el precio tras atrapar a los operadores ansiosos.",
    content: `
      <p>Para no ser la presa, debes entender cómo opera el cazador. La manipulación de mercado no es una conspiración, sino la necesidad de <strong>liquidez institucional</strong>.</p>
      <h3>Trampas Técnicas y Caza de Liquidez</h3>
      <p>Los grandes participantes (bancos, fondos de cobertura) necesitan contrapartida para llenar sus órdenes masivas. Para comprar barato, inducen a los traders minoristas a vender rompiendo soportes de manera temporal para activar sus stops (que son órdenes de venta de mercado), absorbiendo toda esa liquidez para iniciar el movimiento alcista real.</p>
    `
  },
  day5: {
    id: "day5",
    pilar: 1,
    title: "Entendiendo el Short Squeeze",
    unlocked: false,
    completed: false,
    challenge: "Explica en tus palabras la mecánica de un Short Squeeze y por qué está prohibido intentar adivinar el techo de un movimiento parabólico.",
    content: `
      <p>El <strong>Short Squeeze</strong> es un ejemplo clásico de manipulación y pánico técnico. Ocurre cuando un gran número de vendedores en corto se ven obligados a cerrar sus posiciones de manera simultánea.</p>
      <h3>La Cascada de Compras Forzadas</h3>
      <p>Dado que cerrar una posición en corto requiere una orden de compra, el pánico de los vendedores y la ejecución de sus Stop Losses empujan el precio exponencialmente al alza, barriendo a cualquiera que intente buscar techos sin confluencias estructurales.</p>
    `
  },
  day6: {
    id: "day6",
    pilar: 1,
    title: "Identificación de Trampas y Fakeouts",
    unlocked: false,
    completed: false,
    challenge: "Describe la diferencia visual en un gráfico entre una vela de ruptura institucional limpia y una vela que solo cazó liquidez (fakeout).",
    content: `
      <p>Los <strong>Fakeouts</strong> (falsos rompimientos) ocurren constantemente en zonas obvias de soporte y resistencia. Aprender a identificarlos evita entrar tarde al mercado.</p>
      <h3>Mecánica de la Trampa</h3>
      <p>Si el precio perfora un nivel clave pero cierra rápidamente dentro del rango previo dejando una mecha larga, estamos ante un rechazo por absorción institucional. Los operadores profesionales esperan la vela de confirmación en lugar de comprar o vender impulsivamente la ruptura de la línea.</p>
    `
  },
  day7: {
    id: "day7",
    pilar: 1,
    title: "Evaluación y Manifiesto de Mentalidad",
    unlocked: false,
    completed: false,
    challenge: "Escribe tu compromiso mental: declara que aceptas el resultado probabilístico del mercado y define qué sesgo vas a monitorizar esta semana.",
    content: `
      <p>Felicidades por completar el Módulo 1. Has aprendido que el precio es lo único real y has analizado los mecanismos de manipulación y sesgos que destruyen al trader aficionado.</p>
      <div class="alert-box" style="border-left-color: var(--color-accent); background: rgba(59, 130, 246, 0.03);">
        <strong>📝 Evaluación del Módulo 1:</strong> Responde correctamente el cuestionario de abajo para certificar tu comprensión y desbloquear el Módulo de Gestión y Disciplina.
      </div>
    `
  },
  day8: {
    id: "day8",
    pilar: 2,
    title: "Matemáticas del Trader Profesional",
    unlocked: false,
    completed: false,
    challenge: "Calcula la ruina matemática de una cuenta de $10,000 arriesgando el 10% por operación frente al 1% en una racha de 10 operaciones fallidas.",
    content: `
      <p>Iniciamos el <strong>Módulo 2: Gestión y Disciplina</strong>. El trading no es un arte; es un negocio de <strong>estadística y matemáticas aplicadas</strong>.</p>
      <h3>La Preservación del Capital</h3>
      <p>Tu capital es tu inventario de trabajo. Si arriesgas el 1% por operación, necesitas 100 operaciones perdedoras consecutivas para quebrar. Si arriesgas el 10%, con solo 10 operaciones perdedoras (un suceso estadísticamente probable en cualquier sistema) estarás fuera del negocio de forma permanente.</p>
    `
  },
  day9: {
    id: "day9",
    pilar: 2,
    title: "Asimetría Matemática y Ratio R:R",
    unlocked: false,
    completed: false,
    challenge: "Si realizas 20 operaciones arriesgando $100 por trade con un R:R 1:2, y ganas 8 operaciones (40% acierto) y pierdes 12, calcula tu beneficio neto.",
    content: `
      <p>No necesitas acertar el 90% de tus operaciones para ser rentable. La clave está en la <strong>asimetría de los ratios de Riesgo/Beneficio (R:R)</strong>.</p>
      <h3>La ventaja de un R:R 1:2</h3>
      <p>Con un ratio de 1:2, cada acierto paga el doble de lo que cuesta cada pérdida. Esto te permite tener un balance positivo a largo plazo incluso ganando menos de la mitad de tus operaciones.</p>
    `
  },
  day10: {
    id: "day10",
    pilar: 2,
    title: "El Límite de Pérdida Diaria (Drawdown)",
    unlocked: false,
    completed: false,
    challenge: "Establece tu regla inquebrantable de Drawdown diario: define en dinero cuánto es tu límite diario y escribe tu protocolo de apagado inmediato.",
    content: `
      <p>El <strong>Daily Drawdown</strong> o Límite de Pérdida Diaria es el sistema de seguridad de tu cuenta. Evita que un día de frustración o falta de sincronización destruya tu capital de meses.</p>
      <h3>La Regla de las Dos Pérdidas</h3>
      <p>Si ejecutas dos operaciones fallidas en la misma sesión, la regla estoica dicta que debes cerrar la plataforma inmediatamente. El mercado estará ahí mañana; tu capital, si continúas operando con sesgos emocionales, probablemente no.</p>
    `
  },
  day11: {
    id: "day11",
    pilar: 2,
    title: "La Bitácora de Trading",
    unlocked: false,
    completed: false,
    challenge: "Documenta en tu bitácora una operación simulada (o real) reciente siguiendo estrictamente tus reglas de gestión: capital, riesgo exacto y R:R.",
    content: `
      <p>Lo que no se mide no se puede mejorar. La <strong>Bitácora de Trading</strong> es el registro histórico de tu comportamiento frente al mercado.</p>
      <h3>El Espejo del Trader</h3>
      <p>Un sistema repetible se construye documentando cada entrada, salida, emociones sentidas y el cumplimiento o violación de las reglas. Esto transforma un pasatiempo en una profesión auditable.</p>
    `
  },
  day12: {
    id: "day12",
    pilar: 2,
    title: "Cómo Documentar Procesos Operativos",
    unlocked: false,
    completed: false,
    challenge: "Registra en tu diario de trading los costos de comisiones y el deslizamiento (slippage) estimado de tu última operación simulada.",
    content: `
      <p>Una bitácora técnica no solo registra si ganaste o perdiste dinero; registra la calidad de tu <strong>proceso de toma de decisiones</strong>.</p>
      <h3>Parámetros de Auditoría</h3>
      <ul>
        <li><strong>Desviación del Plan:</strong> ¿Operaste por impulso o por setup?</li>
        <li><strong>Ejecución del Stop:</strong> ¿Respetaste el Stop Loss original o lo moviste en contra?</li>
        <li><strong>Comisiones y Slippage:</strong> El costo de comisiones es el costo de hacer negocios; debes medirlo para evaluar tu rentabilidad neta real.</li>
      </ul>
    `
  },
  day13: {
    id: "day13",
    pilar: 2,
    title: "Construcción de un Sistema Repetible",
    unlocked: false,
    completed: false,
    challenge: "Describe por qué operar de forma aleatoria (cambiando reglas cada día) impide obtener una ventaja estadística válida.",
    content: `
      <p>La consistencia no proviene de predecir el futuro; proviene de <strong>ejecutar un proceso repetible</strong> con disciplina de máquina.</p>
      <h3>La Consistencia Operativa</h3>
      <p>Un sistema repetible requiere que las condiciones de entrada y de salida sean idénticas en cada trade. Si cambias de indicadores o de reglas de riesgo cada vez que pierdes, nunca sabrás si tu ventaja estadística realmente funciona a lo largo de una muestra representativa de operaciones.</p>
    `
  },
  day14: {
    id: "day14",
    pilar: 2,
    title: "Cálculo Dinámico de Contratos",
    unlocked: false,
    completed: false,
    challenge: "Si tu cuenta tiene $5,000, arriesgas el 1% ($50) y tu Stop Loss en MES está a 10 puntos ($5 por punto por contrato), ¿cuántos contratos debes operar?",
    content: `
      <p>El tamaño de tu posición nunca debe ser al azar o basarse en el sentimiento. Se calcula matemáticamente antes de cada trade.</p>
      <h3>Fórmula de Posición</h3>
      <div class="highlight-box">
        <strong>Contratos = Riesgo en Dólares / (Distancia de Stop Loss en Puntos x Valor del Punto del Contrato)</strong>
      </div>
      <p>Si la distancia de tu Stop Loss técnico es mayor, debes reducir el número de contratos para que el riesgo financiero siga siendo exactamente el mismo.</p>
    `
  },
  day15: {
    id: "day15",
    pilar: 2,
    title: "Evaluación de Gestión y Riesgo",
    unlocked: false,
    completed: false,
    challenge: "Firma tu manifiesto de riesgo y define tu riesgo máximo por operación (%) y tu límite de pérdida diario en dólares.",
    content: `
      <p>Has finalizado el Módulo 2. Ahora comprendes la naturaleza matemática del trading, el cálculo de posición, la asimetría R:R y la bitácora técnica de procesos.</p>
      <div class="alert-box" style="border-left-color: var(--color-accent); background: rgba(59, 130, 246, 0.03);">
        <strong>📝 Evaluación del Módulo 2:</strong> Aprueba el cuestionario de gestión de riesgo abajo para desbloquear el Módulo de Estrategia Técnica.
      </div>
    `
  },
  day16: {
    id: "day16",
    pilar: 3,
    title: "Estructura de Mercado Real",
    unlocked: false,
    completed: false,
    challenge: "Dibuja o identifica en tu simulador una serie de Máximos más Altos (HH) y Mínimos más Altos (HL) en una tendencia alcista.",
    content: `
      <p>Comenzamos el <strong>Módulo 3: Estrategia de Alta Probabilidad</strong>. Aprenderemos a leer el mercado de forma limpia, directa y <strong>sin indicadores de ruido</strong>.</p>
      <h3>La Subasta Continua</h3>
      <p>El mercado es una subasta. La estructura nos muestra quién tiene el control: si la tendencia hace máximos y mínimos ascendentes, los compradores dominan la subasta; si hace máximos y mínimos descendentes, los vendedores tienen el control.</p>
    `
  },
  day17: {
    id: "day17",
    pilar: 3,
    title: "Ruptura de Estructura (BOS)",
    unlocked: false,
    completed: false,
    challenge: "Busca en el gráfico en vivo un cambio de tendencia marcado por un quiebre de estructura (BOS) y documenta los precios de los niveles rotos.",
    content: `
      <p>El <strong>BOS (Break of Structure)</strong> es el primer indicio de un cambio en la dirección de la subasta de precios.</p>
      <h3>Mecánica del BOS</h3>
      <p>En una tendencia alcista, el último Mínimo Ascendente (HL) es el nivel de defensa de los compradores. Si el precio rompe y cierra por debajo de este nivel, la estructura alcista se invalida, dando paso a una probable estructura bajista (BOS bajista).</p>
    `
  },
  day18: {
    id: "day18",
    pilar: 3,
    title: "Soportes y Resistencias de Valor",
    unlocked: false,
    completed: false,
    challenge: "Identifica en el gráfico de futuros una zona donde el precio haya rebotado al menos dos veces con fuerte volumen y márcala como zona de valor.",
    content: `
      <p>Los soportes y resistencias no son líneas delgadas en el gráfico; son <strong>zonas de acumulación de órdenes</strong> institucionales pendientes por ejecutar.</p>
      <h3>Zonas de Oferta y Demanda</h3>
      <p>Un soporte de valor se localiza en el origen de un fuerte movimiento alcista previo. Buscamos operar en estas zonas porque la probabilidad de que los grandes participantes defiendan sus posiciones es altamente favorable.</p>
    `
  },
  day19: {
    id: "day19",
    pilar: 3,
    title: "Acción del Precio Pura",
    unlocked: false,
    completed: false,
    challenge: "Realiza un análisis completo del activo actual en el simulador basándote únicamente en la estructura y la acción del precio actual sin indicadores.",
    content: `
      <p>Llenar tu pantalla de indicadores como Bandas de Bollinger, MACD o Estocásticos solo añade retraso y parálisis por análisis. El precio es el único indicador líder en tiempo real.</p>
      <h3>La Lectura Limpia</h3>
      <p>Operar con el precio puro consiste en observar la interacción entre impulsos, retrocesos, velocidad de las velas y zonas de liquidez para tomar decisiones rápidas y precisas.</p>
    `
  },
  day20: {
    id: "day20",
    pilar: 3,
    title: "La Ley de Polaridad S/R",
    unlocked: false,
    completed: false,
    challenge: "Encuentra en el simulador un ejemplo de resistencia que, tras ser rota con intención, haya actuado como soporte. Anota los precios del testeo.",
    content: `
      <p>La <strong>Ley de Polaridad</strong> demuestra la memoria del mercado y el comportamiento del flujo de órdenes.</p>
      <h3>Soporte convertido en Resistencia</h3>
      <p>Cuando un soporte fuerte es perforado, los compradores atrapados esperan a que el precio regrese a su nivel de entrada para cerrar sus posiciones con pérdidas nulas (breakeven). Ese cierre de posiciones vendedoras, sumado a nuevos vendedores, transforma el antiguo soporte en resistencia.</p>
    `
  },
  day21: {
    id: "day21",
    pilar: 3,
    title: "Filtros Técnicos de Confluencia",
    unlocked: false,
    completed: false,
    challenge: "Utilizando la EMA 200 y el RSI 14, identifica si el precio cotiza en zona de compras o ventas y anota la señal del oscilador de momentum.",
    content: `
      <p>Aunque operamos basados en acción de precio, el Setup de confluencia Visión Pro utiliza dos filtros complementarios para validar el momentum.</p>
      <ul>
        <li><strong>Filtro de Tendencia (EMA 200):</strong> Si el precio está sobre la EMA 200, la subasta es alcista (solo buscamos compras). Si está bajo ella, es bajista (solo cortos).</li>
        <li><strong>Filtro de Momentum (RSI 14):</strong> Confirmamos el impulso cuando el RSI cruza la línea central de 50 a favor de la tendencia.</li>
      </ul>
    `
  },
  day22: {
    id: "day22",
    pilar: 3,
    title: "Evaluación de Lectura Técnica",
    unlocked: false,
    completed: false,
    challenge: "Explica detalladamente en tu bitácora por qué un gráfico sin indicadores de ruido mejora la toma de decisiones bajo presión.",
    content: `
      <p>Has finalizado el Módulo 3. Conoces las estructuras de mercado, los quiebres (BOS), la polaridad y los filtros de confluencia técnica para una lectura limpia de precios.</p>
      <div class="alert-box" style="border-left-color: var(--color-accent); background: rgba(59, 130, 246, 0.03);">
        <strong>📝 Evaluación del Módulo 3:</strong> Completa y aprueba el cuestionario técnico de abajo para desbloquear el Módulo de Ejecución y Autocontrol Mental.
      </div>
    `
  },
  day23: {
    id: "day23",
    pilar: 4,
    title: "Rutina y Protocolo del Trader",
    unlocked: false,
    completed: false,
    challenge: "Diseña por escrito tu rutina diaria antes de la sesión de trading: horas de sueño, preparación física, revisión de noticias y análisis técnico previo.",
    content: `
      <p>Comenzamos el <strong>Módulo 4: Ejecución y Evaluación</strong>. Un trader profesional se comporta como un atleta de alto rendimiento: tiene una rutina rígida antes, durante y después de operar.</p>
      <h3>La Disciplina del Protocolo</h3>
      <p>Operar de manera profesional requiere estar en un estado mental calmado y descansado. Improvisar la sesión o abrir gráficos minutos antes de la apertura del mercado invita al desastre operativo.</p>
    `
  },
  day24: {
    id: "day24",
    pilar: 4,
    title: "El Protocolo Pre-market y Checklist",
    unlocked: false,
    completed: false,
    challenge: "Escribe una lista de comprobación (checklist) de 5 puntos obligatorios que debes marcar de manera positiva antes de abrir cualquier operación en real.",
    content: `
      <p>Antes de que un piloto despegue, revisa una checklist exhaustiva. En el trading de futuros, debes hacer exactamente lo mismo.</p>
      <h3>Checklist de Confluencias</h3>
      <ul>
        <li>¿El precio está alineado con la EMA 200?</li>
        <li>¿El RSI cruzó la línea central de 50 en vela cerrada?</li>
        <li>¿El Stop Loss está colocado en un nivel estructural válido?</li>
        <li>¿El tamaño de posición respeta el 1% de riesgo máximo?</li>
      </ul>
    `
  },
  day25: {
    id: "day25",
    pilar: 4,
    title: "Ejecución bajo Presión",
    unlocked: false,
    completed: false,
    challenge: "Realiza 5 operaciones en el simulador y documenta tu nivel de calma del 1 al 10 antes de hacer clic en los botones de COMPRAR o VENDER.",
    content: `
      <p>Cuando el precio oscila rápido, tu cerebro entra en modo de alerta. El control emocional bajo presión consiste en <strong>confiar en el proceso matemático</strong> y no en el resultado del trade actual.</p>
      <h3>Aceptación del Riesgo</h3>
      <p>Si has calculado tu tamaño de posición correctamente y has colocado tu stop loss técnico, ya sabes exactamente cuánto vas a perder si falla. Una vez que aceptas esa pérdida como el costo de tu negocio, la ansiedad de la ejecución desaparece.</p>
    `
  },
  day26: {
    id: "day26",
    pilar: 4,
    title: "Protocolo de Cierre Post-Sesión",
    unlocked: false,
    completed: false,
    challenge: "Describe tu protocolo de cierre: ¿qué haces inmediatamente después de terminar tu sesión de trading para desconectar mentalmente?",
    content: `
      <p>El día de trading no termina cuando cierras tu última posición. Termina con tu protocolo de cierre estoico.</p>
      <h3>Desconexión Mental</h3>
      <p>Guarda tus resultados, documenta la sesión en tu bitácora, cierra la plataforma y aléjate de los gráficos. Analizar pantallas constantemente fuera de tu horario operativo fomenta la obsesión y el sobreoperar.</p>
    `
  },
  day27: {
    id: "day27",
    pilar: 4,
    title: "Auditoría Crítica de Operaciones",
    unlocked: false,
    completed: false,
    challenge: "Revisa tu bitácora de la semana pasada, analiza tu tasa de acierto y tu ratio R:R real. Anota cualquier desviación de tu plan de trading.",
    content: `
      <p>La auditoría es el análisis racional y frío de tus estadísticas operativas. Nos permite identificar si nuestra rentabilidad está alineada con la ventaja estadística del sistema.</p>
      <h3>Estadísticas de Valor</h3>
      <ul>
        <li><strong>Profit Factor:</strong> Suma de ganancias dividida por la suma de pérdidas.</li>
        <li><strong>R:R Promedio:</strong> Determina si de verdad estás dejando correr las operaciones ganadoras a 1:2.</li>
      </ul>
    `
  },
  day28: {
    id: "day28",
    pilar: 4,
    title: "El Diario de Errores Operativos",
    unlocked: false,
    completed: false,
    challenge: "Clasifica los últimos 5 errores cometidos en tu simulador como \"técnico\" (romper reglas del setup) o \"emocional\" (entrar por impaciencia o venganza).",
    content: `
      <p>Errar es humano, pero repetir el mismo error operativo por falta de autoanálisis es inaceptable en un trader profesional.</p>
      <h3>El Registro de Desviaciones</h3>
      <p>Mantén un diario específico de errores. Al clasificarlos de manera honesta y objetiva, sabrás con precisión si tu problema actual es la lectura del mercado (error técnico) o la falta de autodisciplina (error emocional).</p>
    `
  },
  day29: {
    id: "day29",
    pilar: 4,
    title: "Mejora Continua Estoica",
    unlocked: false,
    completed: false,
    challenge: "Define una medida correctiva específica y procesable para el error más frecuente (técnico o emocional) que hayas detectado en tu diario de errores.",
    content: `
      <p>El estoicismo es pragmatismo puro. No nos lamentamos por los errores pasados; los analizamos científicamente para diseñar <strong>acciones correctivas concretas</strong>.</p>
      <h3>El Plan de Mejora</h3>
      <p>Si tu error más común es entrar por FOMO antes del cierre de vela, tu regla correctiva debe ser: \"Sólo puedo abrir una posición si pongo una alarma al cierre de la vela actual y mis manos están fuera del ratón hasta entonces\".</p>
    `
  },
  day30: {
    id: "day30",
    pilar: 4,
    title: "Examen de Certificación Final",
    unlocked: false,
    completed: false,
    challenge: "Completa y aprueba el examen final del Módulo 4 con 100%. Genera y descarga tu Diploma de Maestría en Trading Profesional.",
    content: `
      <p>Has alcanzado el último día de este riguroso programa de transformación de 30 días. Has progresado desde desmitificar tus sesgos mentales hasta consolidar una rutina operativa inquebrantable de gestión de riesgo y lectura técnica limpia.</p>
      <div class="alert-box" style="border-left-color: gold; background: rgba(245, 158, 11, 0.03);">
        <strong>🏆 Examen de Certificación Final:</strong> Aprueba el examen técnico-práctico final de 5 preguntas para desbloquear la generación de tu Diploma de Maestría firmado por Albert Sierra.
      </div>
    `
  },
  day31: {
    id: "day31",
    pilar: 5,
    title: "Bloques de Órdenes e Intervención Algorítmica",
    unlocked: false,
    completed: false,
    challenge: "Identifica en tu gráfico del simulador una vela de fuerte intención que haya roto un nivel estructural (BOS) y marca el origen de esa vela como un Bloque de Órdenes (OB) institucional.",
    content: `
      <p>Comenzamos el <strong>Módulo 5: Bloques de Órdenes</strong>. En el trading institucional, entendemos que el mercado no es movido por traders minoristas, sino por algoritmos interbancarios que inyectan volumen masivo en zonas de precios específicas.</p>
      <h3>¿Qué es un Order Block (OB)?</h3>
      <p>Un Order Block es la última vela en sentido contrario antes de un movimiento fuerte e impulsivo que rompe la estructura del mercado (BOS). Esta vela representa la zona exacta donde las instituciones financieras acumularon un volumen masivo de órdenes de compra o venta en el pasado. Dado que las instituciones no pueden inyectar todas sus órdenes a la vez para no colapsar la cotización, dejan órdenes pendientes (límite). Cuando el precio regresa a esta zona (proceso de mitigación), estas órdenes se activan, provocando una reacción fuerte y predecible en el precio.</p>
      <ul>
        <li><strong>OB Alcista (Bullish Order Block):</strong> La última vela bajista antes del impulso alcista que rompe un máximo estructural.</li>
        <li><strong>OB Bajista (Bearish Order Block):</strong> La última vela alcista antes del impulso bajista que rompe un mínimo estructural.</li>
      </ul>
      <div class="highlight-box">
        <strong>💡 Clave Institucional:</strong> Un Order Block solo es válido si genera un BOS real en el precio y deja ineficiencias de volumen (Fair Value Gaps) en su expansión. Si no rompe estructura, es solo ruido del mercado.
      </div>
    `
  },
  day32: {
    id: "day32",
    pilar: 6,
    title: "Caza de Liquidez y la Ilusión de Soportes/Resistencias",
    unlocked: false,
    completed: false,
    challenge: "Encuentra una mecha larga que haya barrido un soporte o resistencia previa para luego darse la vuelta inmediatamente. Anota el precio del barrido de liquidez.",
    content: `
      <p>Comenzamos el <strong>Módulo 6: Liquidez del Mercado</strong>. Los traders minoristas ven los soportes y resistencias como barreras impenetrables donde el precio debe rebotar. Las instituciones los ven como **piscinas de liquidez masivas** (Liquidity Pools).</p>
      <h3>La Caza de Stops (Liquidity Sweeps)</h3>
      <p>Para abrir una posición de compra gigante, una institución necesita contrapartida: necesita que otros vendan en esa misma zona. ¿Dónde se concentran las órdenes de venta? Justo debajo de los soportes obvios (los Stop Loss de los compradores minoristas, que se ejecutan como órdenes de venta de mercado). El algoritmo interbancario empuja temporalmente el precio por debajo del soporte para activar estas órdenes de venta masivas, absorbiéndolas como órdenes de compra baratas para iniciar el movimiento alcista real.</p>
      <ul>
        <li><strong>BSL (Buy Stop Liquidity):</strong> Liquidez de compras por encima de máximos relativos (stops de vendedores).</li>
        <li><strong>SSL (Sell Stop Liquidity):</strong> Liquidez de ventas por debajo de mínimos relativos (stops de compradores).</li>
      </ul>
      <div class="highlight-box">
        <strong>👁️ Regla de Oro:</strong> Si no sabes dónde está la liquidez en el gráfico, tú eres la liquidez. Espera a que ocurra el barrido de liquidez (*sweep*) antes de buscar una entrada.
      </div>
    `
  },
  day33: {
    id: "day33",
    pilar: 7,
    title: "Desequilibrios Algorítmicos e Ineficiencias (FVG)",
    unlocked: false,
    completed: false,
    challenge: "Localiza un desequilibrio de 3 velas en el simulador donde la primera y la tercera vela no se solapen, dejando un vacío o Fair Value Gap (FVG). Anota el precio del rebalanceo.",
    content: `
      <p>Comenzamos el <strong>Módulo 7: Fair Value Gaps</strong>. Cuando el volumen institucional entra al mercado de forma agresiva, crea un desequilibrio de precios llamado **Fair Value Gap (FVG)** o ineficiencia de entrega.</p>
      <h3>Anatomía del FVG</h3>
      <p>Un FVG se compone de un patrón de 3 velas consecutivas. Ocurre cuando el movimiento de la segunda vela es tan rápido y agresivo que la mecha de la primera vela y la mecha de la tercera vela no logran solaparse, dejando un vacío de precios donde solo hubo participación de un lado del mercado (compras o ventas). El algoritmo interbancario tiende a regresar en el futuro a rebalancear esta ineficiencia para entregar el precio de manera eficiente.</p>
      <div class="highlight-box">
        <strong>📈 Confluencia Avanzada:</strong> La combinación de un Order Block con un Fair Value Gap justo en su expansión constituye uno de los setups de mayor probabilidad de acierto del trading institucional.
      </div>
    `
  },
  day34: {
    id: "day34",
    pilar: 8,
    title: "Fractalidad y Alineación Temporal (HTF/LTF)",
    unlocked: false,
    completed: false,
    challenge: "Describe por escrito cómo utilizarías un gráfico de 1 hora para determinar la dirección general y un gráfico de 1 o 5 minutos para afinar tu stop loss de entrada.",
    content: `
      <p>Comenzamos el <strong>Módulo 8: Fractalidad del Mercado</strong>. El mercado financiero es fractal: los mismos patrones estructurales se repiten desde gráficos semanales hasta gráficos de 1 minuto.</p>
      <h3>Alineación de Marcos Temporales</h3>
      <p>Un error mortal es operar setups en 1 minuto en dirección opuesta a la tendencia mayor. El trader profesional utiliza marcos temporales altos (HTF) para determinar la dirección y encontrar zonas de interés (POIs), y marcos temporales bajos (LTF) para esperar la confirmación de la entrada mediante quiebres locales de estructura (BOS) y mitigar el riesgo.</p>
      <ul>
        <li><strong>HTF (High Timeframe):</strong> Gráfico de 1 Hora o 4 Horas (Determina el sesgo direccional).</li>
        <li><strong>LTF (Low Timeframe):</strong> Gráfico de 1 Minuto o 5 Minutos (Determina el gatillo de entrada y sitúa el Stop Loss).</li>
      </ul>
    `
  },
  day35: {
    id: "day35",
    pilar: 9,
    title: "Zonas Premium y Descuento: Comprar Barato, Vender Caro",
    unlocked: false,
    completed: false,
    challenge: "Traza un rango operativo desde el inicio del impulso hasta el final del retroceso en tu simulador. Identifica si el precio actual cotiza por encima (Premium) o por debajo (Descuento) del 50%.",
    content: `
      <p>Comenzamos el <strong>Módulo 9: Rangos de Descuento</strong>. Los profesionales operan bajo las mismas reglas de un negocio comercial de inventarios: **comprar barato y vender caro**.</p>
      <h3>Premium vs Descuento</h3>
      <p>Utilizando el 50% de un rango operativo como frontera de equilibrio:</p>
      <ul>
        <li><strong>Zona Premium (Mitad Superior):</strong> Zona costosa. Solo buscamos ventas y descartamos compras de alto riesgo.</li>
        <li><strong>Zona de Descuento (Mitad Inferior):</strong> Zona barata. Solo buscamos compras en confluencia con OB y FVG institucionales.</li>
      </ul>
    `
  },
  day36: {
    id: "day36",
    pilar: 10,
    title: "El Poder de los Breaker Blocks (OB Roto)",
    unlocked: false,
    completed: false,
    challenge: "Describe la diferencia entre un Order Block normal y un Breaker Block (OB roto que cambia de función). Encuentra un ejemplo en tu simulador.",
    content: `
      <p>Comenzamos el <strong>Módulo 10: Mitigación & Breakers</strong>. ¿Qué ocurre cuando un bloque de órdenes falla y es roto con fuerza? Se transforma en una zona de alta probabilidad operativa llamada **Breaker Block**.</p>
      <h3>Mecánica del Breaker Block</h3>
      <p>El Breaker Block es un bloque de órdenes que fue sobrepasado por un movimiento impulsivo que barrió liquidez previa y luego rompió estructura. Al regresar el precio a este nivel, actúa con el principio de polaridad: un OB bajista roto se convierte en soporte de alta probabilidad para compras, permitiendo a las instituciones mitigar y cerrar en pérdidas nulas sus posiciones contrarias.</p>
    `
  },
  day37: {
    id: "day37",
    pilar: 11,
    title: "Subasta de Volumen: POC y Zonas de Alta Liquidez",
    unlocked: false,
    completed: false,
    challenge: "Identifica el Punto de Control de Volumen (POC) en una consolidación lateral y explica cómo usar las áreas de bajo volumen (LVN) para colocar tu Stop Loss técnico.",
    content: `
      <p>Comenzamos el <strong>Módulo 11: Perfil de Volumen</strong>. La acción del precio describe el movimiento; el perfil de volumen nos revela **dónde se negociaron realmente los contratos interbancarios**.</p>
      <h3>Zonas de Interés de Perfil</h3>
      <ul>
        <li><strong>POC (Point of Control):</strong> El precio exacto donde se negoció el mayor volumen de la sesión. Actúa como un imán para el precio.</li>
        <li><strong>VAL/VAH (Value Area High/Low):</strong> Los límites del área de valor que concentran el 70% de la actividad transaccional.</li>
      </ul>
    `
  },
  day38: {
    id: "day38",
    pilar: 12,
    title: "Reglas de Fondeo y Control de drawdown Institucional",
    unlocked: false,
    completed: false,
    challenge: "Diseña tu plan de Drawdown Máximo Diario específico para una cuenta financiada simulada de $50,000, respetando el límite del 2% diario.",
    content: `
      <p>Comenzamos el <strong>Módulo 12: Especulación de Fondos</strong>. Operar de forma institucional hoy en día implica trabajar con capital de terceros a través de empresas de fondeo (Prop Firms).</p>
      <h3>La Disciplina del Drawdown</h3>
      <p>Los traders institucionales no operan sin límites estrictos. En las cuentas fondeadas, la violación del límite de pérdida diario o el límite total (drawdown máximo) conlleva la cancelación inmediata de la cuenta. El autocontrol estoico es la única herramienta que te permite navegar estas reglas corporativas sin entrar en pánico.</p>
    `
  },
  day39: {
    id: "day39",
    pilar: 13,
    title: "Gestión Activa de Posición: Tomar Parciales y Riesgo Cero",
    unlocked: false,
    completed: false,
    challenge: "Simula una operación con 2 contratos en el simulador. Al alcanzar un R:R 1:1, cierra 1 contrato (toma de parcial) y mueve el Stop Loss del segundo contrato a Breakeven.",
    content: `
      <p>Comenzamos el <strong>Módulo 13: Drawdown & Cierres</strong>. El objetivo de un trader no es tener un 100% de acierto, sino **gestionar el riesgo de forma activa** para que la esperanza matemática haga su trabajo.</p>
      <h3>Tomas de Parciales y Breakeven</h3>
      <p>Los ricos no arriesgan su dinero tontamente. Cuando tu operación alcanza un R:R 1:1, cerrar el 50% de la posición (parcial) asegura ganancias en tu saldo y te permite colocar el Stop Loss de la posición restante a tu precio de entrada (Breakeven), eliminando el riesgo financiero del trade actual por completo.</p>
    `
  },
  day40: {
    id: "day40",
    pilar: 14,
    title: "El Checklist Institucional de Albert Sierra",
    unlocked: false,
    completed: false,
    challenge: "Redacta tu Checklist final de 5 confluencias institucionales antes de cada trade y aprueba la evaluación final de Maestría del Ecosistema.",
    content: `
      <p>Comenzamos el <strong>Módulo 14: Plan de Trading Final</strong>. Has culminado tu formación en la especulación de futuros interbancarios. En este último módulo unificamos todos los conocimientos en un Checklist operativo innegociable.</p>
      <h3>Tu Checklist de Confluencia</h3>
      <p>Antes de pulsar los botones de compra o venta en el simulador, debes marcar positivamente:</p>
      <ol>
        <li>¿El precio está mitigando una zona de interés HTF (OB / FVG)?</li>
        <li>¿Hubo un barrido de liquidez obvio antes del quiebre?</li>
        <li>¿Se generó un BOS en temporalidad menor (LTF)?</li>
        <li>¿Cotizamos en zona de Descuento (para largos) o Premium (para cortos)?</li>
        <li>¿El tamaño de la posición respeta estrictamente el 1% de riesgo?</li>
      </ol>
      <div class="alert-box" style="border-left-color: gold; background: rgba(245, 158, 11, 0.03);">
        <strong>🏆 Examen de Maestría Final del Ecosistema:</strong> Aprueba la evaluación técnica de abajo para certificar tu maestría definitiva y completar el Ecosistema AS.
      </div>
    `
  }
};

// Weekly Pillar Quizzes
const pilarQuizzes = {
  1: [
    {
      q: "¿Cuál es el enfoque estoico principal ante un resultado perdedor en una operación individual?",
      options: [
        "Aceptar que el mercado es probabilístico y el resultado de un trade individual no está bajo tu control.",
        "Buscar la revancha inmediata para recuperar la pérdida antes del cierre.",
        "Cambiar de estrategia porque el sistema ha fallado."
      ],
      answer: 0,
      explanation: "Aceptar que el resultado de un trade individual es incierto y fuera de tu control reduce el apego y la frustración emocional."
    },
    {
      q: "¿Qué es el sesgo de falsas expectativas en el trading de futuros?",
      options: [
        "Pensar que puedes obtener dinero fácil y rápido sin un control estricto de riesgo.",
        "Aceptar que el drawdown es una parte normal del negocio.",
        "Entender que la consistencia requiere tiempo y disciplina."
      ],
      answer: 0,
      explanation: "El sesgo de falsas expectativas nubla el juicio técnico y lleva al trader a asumir riesgos desproporcionados buscando enriquecimiento rápido."
    },
    {
      q: "¿Cómo se define un Short Squeeze en el mercado de futuros?",
      options: [
        "Un aumento acelerado de precio provocado por la liquidación forzosa de posiciones vendedoras.",
        "Una caída abrupta de precio debido a ventas institucionales.",
        "Una consolidación lateral del precio con bajo volumen."
      ],
      answer: 0,
      explanation: "El cierre forzado de posiciones cortas (que se ejecuta como órdenes de compra al mercado) provoca un aumento parabólico en el precio."
    },
    {
      q: "¿Qué es una trampa técnica o 'fakeout' en la lectura de precios?",
      options: [
        "Un rompimiento falso de soporte o resistencia diseñado para atrapar liquidez antes de un giro.",
        "Una orden de mercado que se ejecuta con deslizamiento.",
        "El cruce de una media móvil en un gráfico de velas."
      ],
      answer: 0,
      explanation: "Los fakeouts se producen cuando las instituciones empujan el precio más allá de un soporte/resistencia para activar stops minoristas y contrapartida."
    },
    {
      q: "¿Cuál es la única variable que un trader controla al 100% en el mercado de futuros?",
      options: [
        "El riesgo exacto que asume en cada operación antes de entrar.",
        "La dirección exacta que tomará el precio en la sesión.",
        "El balance neto de ganancias al final del mes."
      ],
      answer: 0,
      explanation: "Controlar el riesgo unitario (dónde sitúas tu stop loss y con qué volumen entras) es la única variable controlable bajo tu poder."
    }
  ],
  2: [
    {
      q: "Si arriesgas el 1% de una cuenta de $10,000, ¿cuál es tu pérdida máxima en dólares por operación?",
      options: ["$10.00 USD", "$100.00 USD", "$1,000.00 USD"],
      answer: 1,
      explanation: "El 1% de $10,000 es exactamente $100. Este es tu límite financiero por operación."
    },
    {
      q: "Con un ratio de Riesgo/Beneficio (R:R) de 1:2, ¿qué tasa de acierto necesitas para estar en equilibrio (sin pérdidas)?",
      options: ["50%", "34%", "20%"],
      answer: 1,
      explanation: "Al ganar el doble de lo que pierdes, con solo un 34% de acierto cubres tus pérdidas y comisiones operativas."
    },
    {
      q: "¿Qué indica la regla del Drawdown Máximo Diario?",
      options: [
        "El límite de pérdida en dólares tras el cual apagas la plataforma inmediatamente.",
        "El objetivo de ganancia diario para retirarte.",
        "El capital mínimo necesario para operar futuros MES."
      ],
      answer: 0,
      explanation: "El drawdown diario actúa de freno automático: una vez tocado, detienes la operativa para evitar dañar más tu capital."
    },
    {
      q: "¿Cuál es el propósito de registrar tus operaciones en la Bitácora de Trading?",
      options: [
        "Identificar patrones de comportamiento repetibles para construir consistencia.",
        "Mostrar tus resultados en redes sociales para ganar seguidores.",
        "Evitar pagar comisiones al broker."
      ],
      answer: 0,
      explanation: "La bitácora proporciona datos objetivos sobre tus decisiones pasadas para evaluar tu apego al plan y corregir desviaciones."
    },
    {
      q: "¿Cómo se calcula el tamaño de posición (contratos) óptimo?",
      options: [
        "Contratos = Riesgo ($) / (Distancia SL x Valor Punto del Contrato)",
        "Contratos = Capital x Apalancamiento",
        "Contratos = Capital / Margen de Garantía"
      ],
      answer: 0,
      explanation: "Esta fórmula vincula de manera científica la pérdida tolerada con la distancia del Stop Loss técnico en el activo operado."
    }
  ],
  3: [
    {
      q: "¿Por qué un trader institucional de futuros prefiere un gráfico limpio a uno lleno de indicadores rezagados?",
      options: [
        "Porque los indicadores secundarios causan parálisis por análisis y añaden ruido al precio puro.",
        "Porque los indicadores cuestan dinero en la plataforma de futuros.",
        "Porque el precio no tiene ninguna relación con las medias móviles."
      ],
      answer: 0,
      explanation: "El precio y la estructura de mercado son los únicos elementos líderes. Los osciladores y medias son sólo cálculos secundarios retrasados."
    },
    {
      q: "¿Qué es un BOS (Break of Structure) en una tendencia alcista?",
      options: [
        "El rompimiento al alza del último máximo de oscilación (HH) confirmando la tendencia.",
        "El quiebre a la baja del último mínimo ascendente (HL) sugiriendo un cambio de tendencia.",
        "Una vela japonesa de cuerpo muy grande con volumen bajo."
      ],
      answer: 1,
      explanation: "Romper el último HL implica el fin de la estructura de mínimos crecientes, sugiriendo que los vendedores toman el control."
    },
    {
      q: "Según la ley de polaridad, ¿qué sucede cuando se rompe una resistencia fuerte?",
      options: [
        "Tiende a actuar como soporte en testeos posteriores debido a la acumulación de órdenes.",
        "Pierde toda su relevancia y debe ser borrada del gráfico.",
        "El precio cae inmediatamente en una tendencia bajista."
      ],
      answer: 0,
      explanation: "Los vendedores rezagados cierran sus posiciones a breakeven, transformando el nivel roto en soporte ante el testeo del precio."
    },
    {
      q: "¿Cuál es la función principal de la EMA 200 en la lectura técnica?",
      options: [
        "Actuar como filtro direccional: solo largos sobre ella, solo cortos bajo ella.",
        "Dar la señal exacta de compra o venta en cada cruce.",
        "Determinar el tamaño de posición óptimo."
      ],
      answer: 0,
      explanation: "La EMA 200 sirve de brújula de tendencia: evita operar en contra del flujo dominante de capital institucional."
    },
    {
      q: "¿Cómo se utiliza el RSI de 14 períodos en una estrategia sin ruido?",
      options: [
        "Como medidor de momentum en el nivel central de 50 a favor de la tendencia.",
        "Para vender cuando toca 70 (sobrecompra) y comprar cuando toca 30 (sobreventa).",
        "Como indicador de la hora de apertura del mercado."
      ],
      answer: 0,
      explanation: "El nivel 50 determina el ecuador de la fuerza; cruzar sobre 50 en tendencia alcista es confirmación de momentum comprador."
    }
  ],
  4: [
    {
      q: "¿Qué comprende la rutina de pre-market de un trader profesional?",
      options: [
        "Preparar el gráfico, verificar noticias de alto impacto y validar la checklist antes de operar.",
        "Abrir varias operaciones en demo para ver el impulso.",
        "Revisar las redes sociales para ver qué recomiendan comprar."
      ],
      answer: 0,
      explanation: "La rutina asegura que estás alineado física y técnicamente antes del inicio de la sesión, evitando sorpresas informativas."
    },
    {
      q: "¿Cómo se clasifica un error en el diario operativo?",
      options: [
        "Como técnico (violación del setup) o emocional (violación del autocontrol).",
        "Como error del broker o error de la plataforma de gráficos.",
        "Como mala suerte o error por manipulación de mercado."
      ],
      answer: 0,
      explanation: "Dividirlos entre técnicos y emocionales te permite enfocar tu proceso correctivo de forma precisa sobre el conocimiento o el autocontrol."
    },
    {
      q: "¿Qué es la inactividad forzada en el protocolo de trading?",
      options: [
        "Retirarse inmediatamente tras tocar el límite de pérdida diaria para evitar la venganza.",
        "Esperar a que el mercado cierre para poder operar.",
        "Dejar de operar durante un año si tienes una pérdida."
      ],
      answer: 0,
      explanation: "La inactividad protege tu cuenta: te retiras al tocar tus límites para calmar la mente y preservar el capital restante."
    },
    {
      q: "¿Cuál es el objetivo de auditar de forma crítica tu diario de errores?",
      options: [
        "Identificar tus debilidades recurrentes y planificar acciones correctivas específicas.",
        "Saber cuánto dinero ganaste en comisiones.",
        "Justificar las pérdidas alegando manipulación de mercado."
      ],
      answer: 0,
      explanation: "La auditoría objetiva busca patrones débiles en tu operativa para mitigarlos con reglas escritas correctivas."
    },
    {
      q: "¿Cuál es la premisa fundamental del mercado de futuros para un operador estoico?",
      options: [
        "El mercado es un entorno de probabilidades, no de certezas.",
        "El mercado siempre sube a largo plazo.",
        "Se puede predecir el precio exacto con indicadores correctos."
      ],
      answer: 0,
      explanation: "El mercado opera bajo incertidumbre. Entenderlo como probabilidades erradica el dolor de perder y la necesidad de tener la razón."
    }
  ],
  5: [
    {
      q: "¿Qué valida la existencia de un Bloque de Órdenes (Order Block) institucional válido?",
      options: [
        "Que el precio haya roto estructura (BOS) y haya dejado ineficiencias (FVG) en su expansión.",
        "Que la vela sea de color verde y tenga un volumen muy bajo.",
        "Que coincida con la hora del cierre del mercado de Londres."
      ],
      answer: 0,
      explanation: "Un OB es válido únicamente si el algoritmo rompe estructura (BOS) y expande con fuerza, dejando ineficiencias de volumen."
    }
  ],
  6: [
    {
      q: "¿Cuál es el propósito algorítmico detrás de un barrido de liquidez (Liquidity Sweep)?",
      options: [
        "Activar los Stop Losses de operadores minoristas para absorber contrapartida institucional.",
        "Dar tiempo a los reguladores a revisar las transacciones del día.",
        "Reducir el apalancamiento general de la cuenta del simulador."
      ],
      answer: 0,
      explanation: "Las instituciones necesitan activar stops (órdenes contrarias a mercado) para contrapartida de sus órdenes masivas."
    }
  ],
  7: [
    {
      q: "¿Cómo se forma un Fair Value Gap (FVG) en un patrón de tres velas?",
      options: [
        "Cuando la mecha de la primera vela y la mecha de la tercera vela no logran solaparse, dejando una ineficiencia en la segunda vela.",
        "Cuando la segunda vela cruza por encima de la EMA 200.",
        "Cuando el volumen de la tercera vela es exactamente el doble de la primera."
      ],
      answer: 0,
      explanation: "Un FVG es un vacío de precios provocado por un flujo unilateral agresivo que impide el solapamiento de mechas adyacentes."
    }
  ],
  8: [
    {
      q: "¿Cuál es la regla fundamental para alinear marcos de tiempo (HTF y LTF)?",
      options: [
        "Definir la dirección y el sesgo en el gráfico mayor (HTF) y buscar el gatillo de entrada en el gráfico menor (LTF).",
        "Operar únicamente compras en LTF si el RSI en HTF está en sobreventa superior a 90.",
        "Ejecutar operaciones en sentido contrario a la estructura mayor si se rompe una media móvil."
      ],
      answer: 0,
      explanation: "Usar HTF para la brújula direccional y LTF para optimizar el Stop Loss técnico maximiza el ratio R:R."
    }
  ],
  9: [
    {
      q: "Si buscamos operaciones de compra institucionales (Largas), ¿en qué zona de precios debemos operar?",
      options: [
        "Por debajo de la línea del 50% del rango operativo (Zona de Descuento).",
        "Por encima de la línea del 50% del rango operativo (Zona Premium).",
        "Exactamente en el punto del POC de volumen máximo sin importar la tendencia."
      ],
      answer: 0,
      explanation: "Las compras deben buscarse en zona barata (Descuento) para maximizar la asimetría matemática."
    }
  ],
  10: [
    {
      q: "¿Qué define a un Breaker Block alcista?",
      options: [
        "Un bloque de órdenes bajista que fue roto con fuerza al alza tras barrer liquidez, y ahora actúa como soporte.",
        "Una vela que se cierra justo en el POC de la sesión anterior.",
        "Un gap que nunca fue rellenado en la apertura de Nueva York."
      ],
      answer: 0,
      explanation: "El Breaker es un OB fallido que se transforma en soporte debido a la mitigación de posiciones en breakeven por parte de instituciones."
    }
  ],
  11: [
    {
      q: "¿Qué representa el Punto de Control (POC) en un perfil de volumen?",
      options: [
        "El precio exacto donde se negoció el mayor volumen de la sesión.",
        "El precio máximo alcanzado durante la sesión asiática.",
        "El stop loss óptimo calculado por la plataforma."
      ],
      answer: 0,
      explanation: "El POC representa la zona de mayor aceptación del precio por parte de compradores y vendedores institucionales."
    }
  ],
  12: [
    {
      q: "¿Cuál es la medida estoica indispensable para no perder una cuenta de fondeo (Prop Firm)?",
      options: [
        "Detener la operativa y apagar la plataforma al tocar tu límite de drawdown diario programado.",
        "Aumentar el tamaño de contratos al perder para recuperar la cuenta rápido.",
        "Operar únicamente minutos antes del cierre del mercado para evitar comisiones."
      ],
      answer: 0,
      explanation: "Respetar el drawdown diario incondicionalmente es la única regla inquebrantable de consistencia."
    }
  ],
  13: [
    {
      q: "¿Cuál es la ventaja de tomar cierres parciales de posición al R:R 1:1?",
      options: [
        "Asegurar ganancias reales de capital y permitir colocar el riesgo de la posición restante a Breakeven.",
        "Evitar el pago de comisiones del broker.",
        "Garantizar que el 100% de los trades sean ganadores sin importar el Stop Loss."
      ],
      answer: 0,
      explanation: "Asegurar beneficios intermedios reduce el drawdown emocional y crea una operación libre de riesgo financiero."
    }
  ],
  14: [
    {
      q: "¿Qué regla estoica final resume el checklist de Albert Sierra antes de abrir una operación?",
      options: [
        "Cumplir el 100% de tus confluencias escritas y no abrir el trade si falta un solo elemento.",
        "Abrir la operación rápido por FOMO si el precio corre con fuerza en Nueva York.",
        "Apostar todo el balance sim de tu cuenta si confías mucho en la dirección."
      ],
      answer: 0,
      explanation: "La disciplina estoica consiste en ejecutar únicamente cuando tu checklist institucional se cumple al 100%."
    }
  ]
};

// Global App State
let activeSection = "welcome";
let activeDayId = "day1";
let activePilarAccordion = 1;
let activeQuizAnswers = {}; // { questionIndex: selectedOptionIndex }
let pilarPassedStates = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false, 14: false };

// Load state from localStorage
const loadProgress = () => {
  const savedProgress = localStorage.getItem("vision_30day_progress");
  if (savedProgress) {
    try {
      const parsed = JSON.parse(savedProgress);
      Object.keys(parsed.days).forEach(key => {
        if (courseData[key]) {
          courseData[key].completed = parsed.days[key].completed;
          courseData[key].unlocked = parsed.days[key].unlocked;
        }
      });
      pilarPassedStates = parsed.quizzes;
    } catch (e) {
      console.error("Error parsing progress", e);
    }
  }
  updateUIProgress();
};

// Save state to localStorage
const saveProgress = () => {
  const daysState = {};
  Object.keys(courseData).forEach(key => {
    daysState[key] = {
      completed: courseData[key].completed,
      unlocked: courseData[key].unlocked
    };
  });
  const stateToSave = {
    days: daysState,
    quizzes: pilarPassedStates
  };
  localStorage.setItem("vision_30day_progress", JSON.stringify(stateToSave));
};

// Update progress bar and unlock states
const updateUIProgress = () => {
  let completedCount = 0;
  const totalDays = 40;

  Object.values(courseData).forEach(day => {
    if (day.completed) completedCount++;
  });

  const percentage = Math.round((completedCount / totalDays) * 100);
  const progressText = document.getElementById("progress-text");
  const progressBar = document.getElementById("progress-bar");
  
  if (progressText) progressText.textContent = `${percentage}%`;
  if (progressBar) progressBar.style.width = `${percentage}%`;

  // Toggle Certificate tab in sidebar if course is completed
  const certMenuItem = document.getElementById("menu-item-certificate");
  if (certMenuItem) {
    const allPassed = Object.values(pilarPassedStates).every(val => val === true);
    certMenuItem.style.display = allPassed ? "block" : "none";
  }

  lucide.createIcons();
};

// Reset academy progress
window.resetAcademyProgress = () => {
  if (confirm("¿Estás seguro de que deseas reiniciar todo tu progreso del curso de 30 días y tu bitácora?")) {
    localStorage.removeItem("vision_30day_progress");
    localStorage.removeItem("vision_simulator_balance");
    Object.keys(courseData).forEach((key, index) => {
      courseData[key].completed = false;
      courseData[key].unlocked = index === 0;
      localStorage.removeItem(`vision_challenge_${key}`);
    });
    pilarPassedStates = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false, 14: false };
    saveProgress();
    updateUIProgress();
    renderAcademicMenu();
    showSection("welcome");
  }
};

// Unlock all lessons and quizzes
window.unlockAllLessons = () => {
  if (confirm("¿Deseas desbloquear todas las lecciones del curso de 30 días y evaluaciones para navegar libremente?")) {
    Object.keys(courseData).forEach(key => {
      courseData[key].unlocked = true;
    });
    pilarPassedStates = { 1: true, 2: true, 3: true, 4: true };
    saveProgress();
    updateUIProgress();
    renderAcademicMenu();
    alert("¡Todas las lecciones y evaluaciones han sido desbloqueadas con éxito!");
  }
};

// Sidebar navigation click routing
const showSection = (sectionId) => {
  document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
  document.querySelectorAll(".menu-item").forEach(item => item.classList.remove("active"));

  const targetSec = document.getElementById(sectionId);
  if (targetSec) {
    targetSec.classList.add("active");
  }

  const targetMenuItem = document.querySelector(`[data-target="${sectionId}"]`);
  if (targetMenuItem) {
    targetMenuItem.classList.add("active");
  }

  activeSection = sectionId;
  stopAllSpeech();

  if (sectionId === "glossary") {
    renderGlossary();
  } else if (sectionId === "certificate") {
    renderCertificate();
  }
};

// Open Specific Pilar from Welcome Screen
window.openPillar = (pilarId) => {
  // Find first unlocked day of this pilar
  const pilarDays = Object.values(courseData).filter(d => d.pilar === pilarId);
  const unlockedDays = pilarDays.filter(d => d.unlocked);
  
  if (unlockedDays.length > 0) {
    // Open the latest unlocked day of this pilar
    const targetDay = unlockedDays[unlockedDays.length - 1];
    window.loadDay(targetDay.id);
  } else {
    alert("Este pilar se encuentra bloqueado. Debes completar las lecciones y evaluaciones de la semana anterior.");
  }
};

// Render Collapsible sidebar week list
const renderAcademicMenu = () => {
  const container = document.getElementById("academic-menu-container");
  if (!container) return;

  let html = "";
  
  const pilares = [
    { id: 1, name: "Pilar 1: Mentalidad Ganadora", icon: "brain" },
    { id: 2, name: "Pilar 2: Gestión y Disciplina", icon: "shield-check" },
    { id: 3, name: "Pilar 3: Estrategia de Valor", icon: "trending-up" },
    { id: 4, name: "Pilar 4: Ejecución y Auditoría", icon: "activity" },
    { id: 5, name: "Pilar 5: Bloques de Órdenes", icon: "box" },
    { id: 6, name: "Pilar 6: Liquidez del Mercado", icon: "target" },
    { id: 7, name: "Pilar 7: Fair Value Gaps", icon: "split" },
    { id: 8, name: "Pilar 8: Fractalidad HTF/LTF", icon: "layers" },
    { id: 9, name: "Pilar 9: Rangos de Descuento", icon: "percent" },
    { id: 10, name: "Pilar 10: Mitigación & Breakers", icon: "repeat" },
    { id: 11, name: "Pilar 11: Perfil de Volumen", icon: "bar-chart-2" },
    { id: 12, name: "Pilar 12: Especulación de Fondos", icon: "award" },
    { id: 13, name: "Pilar 13: Drawdown & Cierres", icon: "shield" },
    { id: 14, name: "Pilar 14: Plan de Trading Final", icon: "check-square" }
  ];

  pilares.forEach(pilar => {
    const pilarDays = Object.values(courseData).filter(d => d.pilar === pilar.id);
    const isOpen = activePilarAccordion === pilar.id;
    
    html += `
      <div class="pilar-group ${isOpen ? 'open' : ''}" id="pilar-group-${pilar.id}">
        <div class="pilar-header" onclick="window.togglePilarAccordion(${pilar.id})">
          <span style="display:flex; align-items:center; gap:8px;">
            <i data-lucide="${pilar.icon}" style="width:14px; height:14px; color: ${isOpen ? 'var(--color-accent)' : 'var(--text-secondary)'}"></i>
            ${pilar.name}
          </span>
          <i data-lucide="${isOpen ? 'chevron-down' : 'chevron-right'}" style="width: 14px; height: 14px; color: var(--text-muted);"></i>
        </div>
        <div class="pilar-sub-list">
    `;
    
    pilarDays.forEach(day => {
      const isActive = activeSection === "academy-day" && activeDayId === day.id;
      const isLocked = !day.unlocked;
      
      let statusIcon = '<i data-lucide="lock" class="status-locked" style="width:12px; height:12px;"></i>';
      if (day.completed) {
        statusIcon = '<i data-lucide="check-circle" class="status-completed" style="width:12px; height:12px; color:var(--color-bull);"></i>';
      } else if (day.unlocked) {
        statusIcon = '<i data-lucide="circle" class="status-unlocked" style="width:12px; height:12px; color:var(--color-accent);"></i>';
      }

      html += `
        <div class="day-item ${isActive ? 'active' : ''} ${isLocked ? 'locked' : ''}" onclick="window.loadDay('${day.id}')">
          <span>Día ${day.id.replace("day", "")}: ${day.title}</span>
          <span class="menu-status">${statusIcon}</span>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  lucide.createIcons();
};

window.togglePilarAccordion = (pilarId) => {
  activePilarAccordion = activePilarAccordion === pilarId ? null : pilarId;
  renderAcademicMenu();
};

// Dynamic support chart generator for the 40 days of the course (TradingView-like style)
const getGraphicForDay = (dayNum) => {
  const width = 500;
  const height = 220;
  let elementsHtml = "";
  let title = "";

  // Common SVG Helpers for clean educational diagrams
  const cardBackground = () => `
    <rect width="${width}" height="${height}" fill="#080a0f" rx="10" stroke="#242f3d" stroke-width="1.5" />
  `;

  const text = (x, y, str, size = 11, color = "#f3f4f6", anchor = "start", weight = "normal") => `
    <text x="${x}" y="${y}" fill="${color}" font-size="${size}" font-family="system-ui, -apple-system, sans-serif" font-weight="${weight}" text-anchor="${anchor}">${str}</text>
  `;

  const line = (x1, y1, x2, y2, color = "#242f3d", w = 1.5, dash = "") => `
    <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" ${dash ? `stroke-dasharray="${dash}"` : ""} />
  `;

  const rect = (x, y, w, h, fill = "none", stroke = "none", strokeW = 1, dash = "") => `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeW}" ${dash ? `stroke-dasharray="${dash}"` : ""} rx="4" />
  `;

  const circle = (x, y, r, fill = "#3b82f6", stroke = "none", strokeW = 1) => `
    <circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeW}" />
  `;

  const arrow = (x1, y1, x2, y2, color = "#f59e0b", w = 2) => `
    <defs>
      <marker id="arr-${dayNum}" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <polygon points="0 0, 6 3, 0 6" fill="${color}" />
      </marker>
    </defs>
    <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" marker-end="url(#arr-${dayNum})" />
  `;

  const wave = (points, color = "#3b82f6", w = 3) => {
    let d = "";
    points.forEach((p, idx) => {
      d += (idx === 0 ? "M " : "L ") + `${p[0]},${p[1]}`;
    });
    return `<path d="${d}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" />`;
  };

  // Draw base background card
  elementsHtml += cardBackground();

  switch (dayNum) {
    case 1:
      title = "El Precio es la Única Realidad";
      elementsHtml += wave([[40, 160], [100, 120], [160, 140], [220, 90], [280, 110], [360, 60], [420, 80]], "rgba(59, 130, 246, 0.4)", 2);
      elementsHtml += wave([[40, 160], [100, 120], [160, 140], [220, 90], [280, 110], [360, 60]], "#3b82f6", 3.5);
      
      elementsHtml += circle(360, 60, 6, "#10b981");
      elementsHtml += line(360, 60, 460, 60, "#10b981", 1.5, "3,3");
      elementsHtml += text(420, 52, "Precio Actual", 9, "#10b981", "middle", "bold");
      
      elementsHtml += arrow(330, 130, 355, 75, "#f59e0b");
      elementsHtml += rect(220, 130, 210, 26, "#1b222c", "#f59e0b", 1);
      elementsHtml += text(325, 146, "Aceptación Objetiva del Precio", 9.5, "#f3f4f6", "middle", "bold");
      break;

    case 2:
      title = "FOMO y Pánico en la Curva de Precios";
      elementsHtml += wave([[40, 150], [100, 140], [180, 60], [220, 45], [260, 120], [320, 165], [380, 175], [440, 110]], "#3b82f6", 3);
      
      // Peak FOMO
      elementsHtml += circle(220, 45, 6, "#ef4444");
      elementsHtml += line(220, 45, 220, 90, "#ef4444", 1, "2,2");
      elementsHtml += rect(170, 90, 100, 22, "#1b222c", "#ef4444", 1);
      elementsHtml += text(220, 104, "FOMO (Comprar Techo)", 8.5, "#ef4444", "middle", "bold");

      // Panic Bottom
      elementsHtml += circle(380, 175, 6, "#ef4444");
      elementsHtml += line(380, 175, 380, 130, "#ef4444", 1, "2,2");
      elementsHtml += rect(330, 100, 100, 22, "#1b222c", "#ef4444", 1);
      elementsHtml += text(380, 114, "PÁNICO (Vender Suelo)", 8.5, "#ef4444", "middle", "bold");
      break;

    case 3:
      title = "Distribución Aleatoria de Resultados";
      const outcomes = ["W", "L", "L", "W", "W", "L", "W", "L", "W", "W"];
      outcomes.forEach((t, i) => {
        const x = 50 + i * 40;
        const color = t === "W" ? "#10b981" : "#ef4444";
        elementsHtml += `
          <rect x="${x}" y="85" width="28" height="28" fill="${color}15" stroke="${color}" stroke-width="2" rx="4" />
          <text x="${x + 14}" y="103" fill="${color}" font-size="12" font-family="system-ui" text-anchor="middle" font-weight="bold">${t}</text>
        `;
      });
      elementsHtml += text(250, 150, "Muestra de 10 Operaciones (60% Acierto)", 11, "#f3f4f6", "middle", "bold");
      elementsHtml += text(250, 168, "El resultado de cada operación individual es 100% aleatorio", 9, "#9ca3af", "middle");
      break;

    case 4:
      title = "SSL Sweep (Barrido de Liquidez)";
      elementsHtml += line(40, 120, 460, 120, "#ef4444", 1.5, "4,4");
      elementsHtml += text(50, 112, "Soporte Obvio Minorista (Zonas de Stops acumulados)", 9.5, "#ef4444");
      
      elementsHtml += wave([[40, 90], [120, 110], [200, 90], [280, 120], [300, 150], [330, 80], [420, 60]], "#3b82f6", 3.5);
      
      // Sweep indicator
      elementsHtml += circle(300, 150, 6, "#10b981");
      elementsHtml += arrow(300, 190, 300, 160, "#10b981");
      elementsHtml += text(300, 203, "Caza de Liquidez e Inyección Alcista", 9.5, "#10b981", "middle", "bold");
      break;

    case 5:
      title = "Short Squeeze (Compras Forzadas)";
      elementsHtml += line(40, 110, 460, 110, "#ef4444", 1.5, "4,4");
      elementsHtml += text(50, 102, "Resistencia Minorista (Buy Stops de vendedores)", 9.5, "#ef4444");
      
      elementsHtml += wave([[40, 130], [120, 120], [200, 125], [260, 110], [280, 45], [340, 35]], "#3b82f6", 3.5);
      
      // Breakout arrow
      elementsHtml += circle(280, 45, 5, "#10b981");
      elementsHtml += arrow(250, 85, 275, 55, "#10b981");
      elementsHtml += text(240, 98, "Cascada de Compras (Squeeze)", 9.5, "#10b981", "middle", "bold");
      break;

    case 6:
      title = "Falso Rompimiento (Fakeout)";
      elementsHtml += line(40, 100, 460, 100, "rgba(255, 255, 255, 0.2)", 1.5, "3,3");
      elementsHtml += text(50, 92, "Resistencia de Valor", 9, "#9ca3af");
      
      // Stylized candle structure showing rejection
      elementsHtml += `
        <!-- Left candle (bull) -->
        <rect x="180" y="110" width="16" height="40" fill="#10b981" rx="2" />
        <line x1="188" y1="95" x2="188" y2="160" stroke="#10b981" stroke-width="1.5" />
        
        <!-- Fakeout candle (long upper wick, close inside) -->
        <rect x="240" y="105" width="16" height="15" fill="#ef4444" rx="2" />
        <line x1="248" y1="55" x2="248" y2="135" stroke="#ef4444" stroke-width="2" />
      `;
      
      elementsHtml += circle(248, 55, 5, "#ef4444");
      elementsHtml += arrow(330, 60, 260, 65, "#ef4444");
      elementsHtml += text(340, 64, "Rompimiento Falso", 9.5, "#ef4444", "start", "bold");
      break;

    case 7:
      title = "Escudo de Control Mental Estoico";
      elementsHtml += `
        <path d="M 250,45 C 280,45 305,55 305,90 C 305,135 250,165 250,165 C 250,165 195,135 195,90 C 195,55 220,45 250,45 Z" fill="rgba(59, 130, 246, 0.08)" stroke="#3b82f6" stroke-width="3" />
        <path d="M 250,60 L 250,145 M 220,90 L 280,90" stroke="#3b82f6" stroke-width="2.5" />
        <text x="250" y="32" fill="#f3f4f6" font-size="12" font-weight="bold" text-anchor="middle">MANIFIESTO ESTOICO</text>
        <text x="120" y="95" fill="#ef4444" font-size="9.5" font-weight="bold" text-anchor="end">EMOCIÓN / FOMO</text>
        <text x="380" y="95" fill="#10b981" font-size="9.5" font-weight="bold" text-anchor="start">DISCIPLINA / RIESGO</text>
      `;
      break;

    case 8:
      title = "Matemáticas de Gestión de Capital";
      // Equity curves
      let safePts = [];
      let ruinPts = [];
      let sVal = 100;
      let rVal = 100;
      for(let i=0; i<12; i++) {
        let x = 60 + i * 32;
        sVal -= 1;
        rVal = rVal * 0.90;
        safePts.push(`${x},${170 - sVal * 1.1}`);
        ruinPts.push(`${x},${170 - rVal * 1.1}`);
      }

      elementsHtml += `
        <path d="M 60,60 L ${safePts.join(' L ')}" fill="none" stroke="#10b981" stroke-width="3" />
        <path d="M 60,60 L ${ruinPts.join(' L ')}" fill="none" stroke="#ef4444" stroke-width="3" />
        <text x="60" y="45" fill="#9ca3af" font-size="9">Capital de Trabajo Inicial: $10,000</text>
        <text x="420" y="${170 - sVal * 1.1 + 3}" fill="#10b981" font-size="9" font-weight="bold">Riesgo 1% (Seguro)</text>
        <text x="420" y="${170 - rVal * 1.1 + 3}" fill="#ef4444" font-size="9" font-weight="bold">Riesgo 10% (Ruina)</text>
      `;
      break;

    case 9:
      title = "Asimetría Matemática R:R 1:2";
      elementsHtml += line(60, 110, 440, 110, "#3b82f6", 2);
      elementsHtml += text(70, 100, "Nivel de Entrada", 9.5, "#3b82f6", "start", "bold");
      
      // TP and SL boxes
      elementsHtml += `
        <rect x="140" y="40" width="220" height="70" fill="rgba(16, 185, 129, 0.08)" stroke="#10b981" stroke-width="1.2" rx="4" />
        <text x="250" y="78" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">BENEFICIO (TP 1:2) +$200</text>
        
        <rect x="140" y="110" width="220" height="35" fill="rgba(239, 68, 68, 0.08)" stroke="#ef4444" stroke-width="1.2" rx="4" />
        <text x="250" y="132" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">RIESGO (SL 1:1) -$100</text>
      `;
      break;

    case 10:
      title = "Límite Diario de Pérdida (Drawdown)";
      elementsHtml += wave([[40, 60], [120, 80], [200, 130], [280, 150]], "#ef4444", 3);
      elementsHtml += line(40, 140, 460, 140, "#ef4444", 1.5, "4,4");
      elementsHtml += text(50, 132, "Límite Máximo de Pérdida Diaria (2%)", 9.5, "#ef4444");
      
      elementsHtml += circle(280, 150, 6, "#ef4444");
      elementsHtml += rect(190, 168, 120, 24, "#1b222c", "#ef4444", 1.2);
      elementsHtml += text(250, 184, "DETENER OPERATIVA", 9.5, "#ef4444", "middle", "bold");
      break;

    case 11:
      title = "Parámetros de la Bitácora";
      elementsHtml += `
        <rect x="40" y="40" width="420" height="135" fill="#131a22" stroke="#242f3d" rx="6"/>
        <line x1="40" y1="75" x2="460" y2="75" stroke="#242f3d" />
        <text x="250" y="60" fill="#f3f4f6" font-size="11" font-weight="bold" text-anchor="middle">Registro de Auditoría de Procesos</text>
        <g fill="#9ca3af" font-size="9" transform="translate(60, 95)">
          <text x="0" y="0">1. SETUP OPERADO:</text>
          <text x="140" y="0" fill="#f3f4f6">Confluencia Visión Pro</text>
          <text x="0" y="22">2. CAPITAL EXPUESTO:</text>
          <text x="140" y="22" fill="#3b82f6" font-weight="bold">1% de la Cuenta ($100)</text>
          <text x="0" y="44">3. ESTADO MENTAL:</text>
          <text x="140" y="44" fill="#10b981" font-weight="bold">Cuidado y Enfoque Estoico</text>
        </g>
      `;
      break;

    case 12:
      title = "Proceso Operativo Real";
      elementsHtml += `
        <rect x="60" y="40" width="380" height="135" fill="#131a22" stroke="#242f3d" rx="6" />
        <g fill="#9ca3af" font-size="9" transform="translate(80, 70)">
          <text x="0" y="0">Resultado Bruto:</text>
          <text x="240" y="0" fill="#10b981" font-weight="bold" text-anchor="end">+$250.00</text>
          <text x="0" y="22">Deslizamiento (Slippage):</text>
          <text x="240" y="22" fill="#ef4444" font-weight="bold" text-anchor="end">-$20.00</text>
          <text x="0" y="44">Comisión Operativa:</text>
          <text x="240" y="44" fill="#ef4444" font-weight="bold" text-anchor="end">-$5.00</text>
        </g>
        <line x1="80" y1="140" x2="320" y2="140" stroke="#242f3d" />
        <text x="80" y="160" fill="#f3f4f6" font-size="10" font-weight="bold">Resultado Neto Real:</text>
        <text x="320" y="160" fill="#10b981" font-size="11.5" font-weight="bold" text-anchor="end">+$225.00</text>
      `;
      break;

    case 13:
      title = "Construcción de un Sistema Repetible";
      elementsHtml += `
        <g font-weight="bold" font-size="10" text-anchor="middle">
          <rect x="40" y="85" width="80" height="35" fill="#131a22" stroke="#242f3d" rx="4" />
          <text x="80" y="106" fill="#f3f4f6">1. Reglas</text>
          <rect x="150" y="85" width="90" height="35" fill="rgba(59, 130, 246, 0.08)" stroke="#3b82f6" rx="4" />
          <text x="195" y="106" fill="#3b82f6">2. Ejecución</text>
          <rect x="270" y="85" width="85" height="35" fill="#131a22" stroke="#242f3d" rx="4" />
          <text x="312.5" y="106" fill="#f3f4f6">3. Muestra 100</text>
          <rect x="380" y="85" width="80" height="35" fill="rgba(16, 185, 129, 0.08)" stroke="#10b981" rx="4" />
          <text x="420" y="106" fill="#10b981">4. Esperanza</text>
        </g>
      `;
      elementsHtml += arrow(120, 102, 150, 102, "#3b82f6");
      elementsHtml += arrow(240, 102, 270, 102, "#3b82f6");
      elementsHtml += arrow(355, 102, 380, 102, "#10b981");
      break;

    case 14:
      title = "Cálculo Dinámico de Contratos";
      elementsHtml += `
        <rect x="60" y="50" width="150" height="60" fill="rgba(16, 185, 129, 0.04)" stroke="#10b981" stroke-width="1.2" rx="4" />
        <text x="135" y="72" fill="#f3f4f6" font-size="9.5" font-weight="bold" text-anchor="middle">Stop Loss Estrecho (10 pts)</text>
        <text x="135" y="92" fill="#10b981" font-size="11.5" font-weight="bold" text-anchor="middle">2 Contratos MES</text>
        
        <rect x="290" y="50" width="150" height="60" fill="rgba(239, 68, 68, 0.04)" stroke="#ef4444" stroke-width="1.2" rx="4" />
        <text x="365" y="72" fill="#f3f4f6" font-size="9.5" font-weight="bold" text-anchor="middle">Stop Loss Amplio (20 pts)</text>
        <text x="365" y="92" fill="#ef4444" font-size="11.5" font-weight="bold" text-anchor="middle">1 Contrato MES</text>

        <path d="M 220,80 L 280,80" stroke="#f59e0b" stroke-dasharray="2,2" stroke-width="1.2" marker-end="url(#arr-14)" />
        <text x="250" y="135" fill="#f3f4f6" font-size="10" font-weight="bold" text-anchor="middle">El riesgo monetario total es el mismo en ambos setups ($100)</text>
      `;
      break;

    case 15:
      title = "Ancla Metodológica";
      elementsHtml += `
        <path d="M 250,55 L 250,140 M 210,75 L 290,75 M 190,110 C 190,165 310,165 310,110" fill="none" stroke="#f59e0b" stroke-width="4.5" stroke-linecap="round" />
        <circle cx="250" cy="55" r="10" stroke="#f59e0b" stroke-width="3" fill="none" />
        <text x="250" y="165" fill="#f3f4f6" font-size="11" font-weight="bold" text-anchor="middle">PRESERVACIÓN DEL CAPITAL DE TRABAJO</text>
      `;
      break;

    case 16:
      title = "Estructura de Mercado (Tendencia Alcista)";
      elementsHtml += wave([[40, 160], [100, 100], [140, 120], [210, 60], [250, 85], [320, 30], [360, 50], [420, 15]], "#3b82f6", 3.5);
      
      elementsHtml += circle(100, 100, 4, "#3b82f6"); elementsHtml += text(100, 85, "HH", 9.5, "#3b82f6", "middle", "bold");
      elementsHtml += circle(210, 60, 4, "#3b82f6"); elementsHtml += text(210, 45, "HH", 9.5, "#3b82f6", "middle", "bold");
      elementsHtml += circle(320, 30, 4, "#3b82f6"); elementsHtml += text(320, 15, "HH", 9.5, "#3b82f6", "middle", "bold");
      
      elementsHtml += circle(140, 120, 4, "#10b981"); elementsHtml += text(140, 136, "HL", 9.5, "#10b981", "middle", "bold");
      elementsHtml += circle(250, 85, 4, "#10b981"); elementsHtml += text(250, 101, "HL", 9.5, "#10b981", "middle", "bold");
      elementsHtml += circle(360, 50, 4, "#10b981"); elementsHtml += text(360, 66, "HL", 9.5, "#10b981", "middle", "bold");
      break;

    case 17:
      title = "Quiebre de Estructura (BOS Bajista)";
      elementsHtml += wave([[40, 140], [100, 80], [160, 110], [220, 50], [280, 125], [320, 140]], "#3b82f6", 3.5);
      
      elementsHtml += line(160, 110, 340, 110, "#ef4444", 1.2, "3,3");
      elementsHtml += circle(280, 125, 5, "#ef4444");
      elementsHtml += text(345, 114, "BOS Bajista (Quiebre)", 9.5, "#ef4444", "start", "bold");
      break;

    case 18:
      title = "Zonas de Oferta y Demanda";
      elementsHtml += `
        <rect x="40" y="30" width="420" height="35" fill="rgba(239, 68, 68, 0.05)" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="2,2" rx="4" />
        <text x="250" y="52" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">ZONA DE OFERTA INSTITUCIONAL (Ventas)</text>
        
        <rect x="40" y="135" width="420" height="35" fill="rgba(16, 185, 129, 0.05)" stroke="#10b981" stroke-width="1.2" stroke-dasharray="2,2" rx="4" />
        <text x="250" y="157" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">ZONA DE DEMANDA INSTITUCIONAL (Compras)</text>
      `;
      break;

    case 19:
      title = "Acción del Precio Pura";
      elementsHtml += `
        <!-- Stylized pinbar pattern -->
        <line x1="250" y1="50" x2="250" y2="150" stroke="#10b981" stroke-width="3" />
        <rect x="242" y="50" width="16" height="25" fill="#10b981" rx="2" />
        <circle cx="250" cy="150" r="6" fill="#10b981" />
        <text x="250" y="172" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">Pinbar Alcista (Rechazo de Mínimos)</text>
      `;
      break;

    case 20:
      title = "La Ley de Polaridad";
      elementsHtml += line(40, 110, 460, 110, "#f59e0b", 2);
      elementsHtml += text(45, 100, "Resistencia Antigua", 9, "#f59e0b");
      elementsHtml += text(45, 125, "Soporte Nuevo (Polaridad)", 9, "#10b981", "start", "bold");
      
      elementsHtml += wave([[60, 160], [130, 130], [200, 140], [270, 80], [330, 110], [410, 50]], "#3b82f6", 3);
      elementsHtml += circle(330, 110, 6, "#10b981");
      break;

    case 21:
      title = "EMA 200 y Momentum RSI";
      elementsHtml += wave([[40, 80], [120, 110], [200, 90], [280, 60], [360, 80], [440, 40]], "#3b82f6", 3.5);
      elementsHtml += wave([[40, 120], [120, 115], [200, 105], [280, 95], [360, 90], [440, 80]], "#f59e0b", 2);
      elementsHtml += text(440, 70, "EMA 200 (Filtro)", 9, "#f59e0b", "end");
      
      // RSI panel
      elementsHtml += `
        <rect x="40" y="145" width="420" height="40" fill="#131a22" stroke="#242f3d" rx="4" />
        <line x1="40" y1="165" x2="460" y2="165" stroke="rgba(255, 255, 255, 0.15)" stroke-dasharray="2,2" />
        <text x="50" y="157" fill="#9ca3af" font-size="7.5">RSI 14 (Línea 50)</text>
        <path d="M 50,180 L 150,170 L 250,162 L 350,152 L 450,150" fill="none" stroke="#10b981" stroke-width="1.8" />
        <circle cx="250" cy="162" r="3.5" fill="#10b981" />
      `;
      break;

    case 22:
      title = "Faro de Dirección";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#131a22" stroke="#242f3d" rx="8" />
        <path d="M 235,160 L 245,65 L 255,65 L 265,160 Z" fill="#1b222c" stroke="#3b82f6" stroke-width="2" />
        <rect x="242" y="52" width="16" height="13" fill="#f59e0b" rx="1.5" />
        <polygon points="250,58 100,20 100,120" fill="rgba(245, 158, 11, 0.05)" />
        <polygon points="250,58 400,20 400,120" fill="rgba(245, 158, 11, 0.05)" />
        <text x="250" y="45" fill="#f3f4f6" font-size="11" font-weight="bold" text-anchor="middle">ESTRUCTURA = EL FARO DE DIRECCIÓN</text>
      `;
      break;

    case 23:
      title = "Cronograma Diario del Operador";
      elementsHtml += `
        <rect x="40" y="40" width="420" height="135" fill="#131a22" stroke="#242f3d" rx="8" />
        <line x1="60" y1="100" x2="440" y2="100" stroke="#242f3d" stroke-width="4" />
        
        <circle cx="100" cy="100" r="8" fill="#3b82f6" />
        <text x="100" y="85" fill="#f3f4f6" font-size="7.5" font-weight="bold" text-anchor="middle">08:00 AM</text>
        <text x="100" y="120" fill="#9ca3af" font-size="8.5" text-anchor="middle">Pre-market</text>

        <circle cx="250" cy="100" r="8" fill="#10b981" />
        <text x="250" y="85" fill="#f3f4f6" font-size="7.5" font-weight="bold" text-anchor="middle">09:30 AM</text>
        <text x="250" y="120" fill="#10b981" font-size="8.5" font-weight="bold" text-anchor="middle">Sesión Abierta</text>

        <circle cx="400" cy="100" r="8" fill="#f59e0b" />
        <text x="400" y="85" fill="#f3f4f6" font-size="7.5" font-weight="bold" text-anchor="middle">12:00 PM</text>
        <text x="400" y="120" fill="#9ca3af" font-size="8.5" text-anchor="middle">Cierre & Bitácora</text>
      `;
      break;

    case 24:
      title = "Checklist pre-market Visión Pro";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#131a22" stroke="#242f3d" rx="8" />
        <text x="250" y="48" fill="#f3f4f6" font-size="11" font-weight="bold" text-anchor="middle">Lista de Confluencias de Entrada</text>
      `;
      const checklist = [
        "1. ¿Filtro direccional de tendencia EMA 200 verificado?",
        "2. ¿Filtro de momentum RSI 14 cruzado y confirmado?",
        "3. ¿Entrada en zona de soporte/resistencia estructural?",
        "4. ¿Gestión de riesgo asignada exactamente en el 1%?"
      ];
      checklist.forEach((str, i) => {
        const y = 68 + i * 26;
        elementsHtml += `
          <rect x="80" y="${y}" width="14" height="14" fill="none" stroke="#10b981" stroke-width="1.5" rx="3" />
          <polyline points="83 ${y+7}, 86 ${y+10}, 91 ${y+4}" fill="none" stroke="#10b981" stroke-width="2" />
          <text x="105" y="${y + 11}" fill="#f3f4f6" font-size="9.5">${str}</text>
        `;
      });
      break;

    case 25:
      title = "Pulsaciones vs Enfoque Estoico";
      elementsHtml += `
        <rect x="40" y="30" width="420" height="150" fill="#131a22" stroke="#242f3d" rx="8" />
        
        <rect x="50" y="50" width="165" height="110" fill="rgba(239, 68, 68, 0.02)" stroke="rgba(239, 68, 68, 0.15)" />
        <text x="132.5" y="70" fill="#ef4444" font-size="9.5" font-weight="bold" text-anchor="middle">Operativa por Impulso (Reactividad)</text>
        <text x="132.5" y="110" fill="#9ca3af" font-size="8.5" text-anchor="middle">Miedo a perder, FOMO, sobreoperar</text>

        <rect x="260" y="50" width="185" height="110" fill="rgba(16, 185, 129, 0.02)" stroke="rgba(16, 185, 129, 0.15)" />
        <text x="352.5" y="70" fill="#10b981" font-size="9.5" font-weight="bold" text-anchor="middle">Ejecución Estoica (Neutralidad)</text>
        <text x="352.5" y="110" fill="#9ca3af" font-size="8.5" text-anchor="middle">Acepta el riesgo y la probabilidad</text>
      `;
      break;

    case 26:
      title = "Apagado y Cierre Operativo";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#131a22" stroke="#ef4444" stroke-width="1.5" rx="8" />
        <circle cx="250" cy="90" r="30" fill="rgba(239, 68, 68, 0.05)" stroke="#ef4444" stroke-width="3" />
        <line x1="250" y1="72" x2="250" y2="92" stroke="#ef4444" stroke-width="5" stroke-linecap="round" />
        <text x="250" y="145" fill="#f3f4f6" font-size="12" font-weight="bold" text-anchor="middle">SISTEMA APAGADO</text>
      `;
      break;

    case 27:
      title = "Métricas Reales vs Planificadas";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#131a22" stroke="#242f3d" rx="8" />
        
        <rect x="320" y="48" width="10" height="10" fill="#3b82f6" />
        <text x="335" y="56" fill="#9ca3af" font-size="8.5" font-family="Arial">Objetivo</text>
        <rect x="380" y="48" width="10" height="10" fill="#10b981" />
        <text x="395" y="56" fill="#9ca3af" font-size="8.5" font-family="Arial">Logrado</text>

        <rect x="90" y="70" width="20" height="70" fill="#3b82f6" />
        <rect x="112" y="80" width="20" height="60" fill="#10b981" />
        <text x="111" y="152" fill="#f3f4f6" font-size="8.5" text-anchor="middle">Acierto (50% vs 43%)</text>

        <rect x="230" y="80" width="20" height="60" fill="#3b82f6" />
        <rect x="252" y="60" width="20" height="80" fill="#10b981" />
        <text x="251" y="152" fill="#f3f4f6" font-size="8.5" text-anchor="middle">Ratio R:R (1:2 vs 1:2.4)</text>
      `;
      break;

    case 28:
      title = "Agrupación de Errores Operativos";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#131a22" stroke="#242f3d" rx="8" />
        
        <circle cx="160" cy="105" r="50" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="20" />
        <circle cx="160" cy="105" r="30" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="15" />
        <circle cx="160" cy="105" r="10" fill="#f59e0b" />
        
        <circle cx="150" cy="100" r="4" fill="#3b82f6" />
        <circle cx="162" cy="112" r="4" fill="#3b82f6" />
        <text x="230" y="85" fill="#3b82f6" font-size="9.5" font-weight="bold">Errores Técnicos (En el setup)</text>

        <circle cx="130" cy="75" r="4" fill="#ef4444" />
        <circle cx="190" cy="130" r="4" fill="#ef4444" />
        <text x="230" y="125" fill="#ef4444" font-size="9.5" font-weight="bold">Errores de Disciplina (FOMO)</text>
      `;
      break;

    case 29:
      title = "Bucle de Mejora Continua Estoica";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#131a22" stroke="#242f3d" rx="8" />
        
        <path d="M 250,55 A 45,45 0 1,1 205,100" fill="none" stroke="#3b82f6" stroke-width="3" marker-end="url(#arr-29)" />
        <path d="M 205,100 A 45,45 0 0,1 250,145" fill="none" stroke="#10b981" stroke-width="3" marker-end="url(#arr-29)" />
        <path d="M 250,145 A 45,45 0 0,1 250,55" fill="none" stroke="#f59e0b" stroke-width="3" marker-end="url(#arr-29)" />
        
        <text x="250" y="80" fill="#3b82f6" font-size="8.5" font-weight="bold" text-anchor="middle">1. AUDITAR</text>
        <text x="180" y="115" fill="#10b981" font-size="8.5" font-weight="bold" text-anchor="middle">2. MEDIR</text>
        <text x="320" y="115" fill="#f59e0b" font-size="8.5" font-weight="bold" text-anchor="middle">3. CORREGIR</text>
      `;
      break;

    case 30:
      title = "Diploma de Certificación Final";
      elementsHtml += `
        <rect x="80" y="30" width="340" height="150" fill="#131a22" stroke="#d4af37" stroke-width="3" rx="4" />
        <rect x="88" y="38" width="324" height="134" fill="none" stroke="rgba(212,175,55,0.2)" stroke-width="1.2" />
        
        <text x="250" y="65" fill="#d4af37" font-size="13" font-weight="bold" text-anchor="middle" letter-spacing="2">DIPLOMA DE CERTIFICACIÓN</text>
        <text x="250" y="85" fill="#9ca3af" font-size="7.5" text-anchor="middle">OTORGADO POR COMPLETAR EXPOSITIVAMENTE LA MASTERCLASS</text>
        <text x="250" y="110" fill="#f3f4f6" font-size="14" font-weight="bold" text-anchor="middle">MAESTRÍA EN TRADING PROFESIONAL</text>
        
        <text x="350" y="142" fill="#d4af37" font-size="7" font-weight="bold" text-anchor="middle">Firma: Albert Sierra</text>
      `;
      break;

    case 31:
      title = "Order Block (OB) e Intervención Algorítmica";
      // Stylized candles
      elementsHtml += `
        <!-- OB candle (bear) -->
        <rect x="80" y="110" width="20" height="40" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" stroke-width="1.5" />
        <line x1="90" y1="90" x2="90" y2="160" stroke="#ef4444" stroke-width="1.2" />
        
        <!-- Big bull candle (breakout) -->
        <rect x="130" y="50" width="22" height="100" fill="#10b981" stroke="#10b981" />
        <line x1="141" y1="30" x2="141" y2="160" stroke="#10b981" stroke-width="1.5" />
        
        <!-- Pullback mitigation candle -->
        <rect x="240" y="110" width="20" height="25" fill="#ef4444" stroke="#ef4444" />
        <line x1="250" y1="95" x2="250" y2="145" stroke="#ef4444" />

        <!-- OB Area marker -->
        <rect x="80" y="110" width="180" height="40" fill="rgba(16, 185, 129, 0.04)" stroke="#10b981" stroke-width="1" stroke-dasharray="3,3" />
        <text x="170" y="125" fill="#10b981" font-size="8" font-weight="bold">Zona de Mitigación (Order Block)</text>

        <circle cx="250" cy="120" r="5" fill="#10b981" />
        <text x="250" y="85" fill="#10b981" font-size="9" font-weight="bold" text-anchor="middle">Mitigación (Entrada)</text>
      `;
      break;

    case 32:
      title = " sweeps de Liquidez (SSL / BSL)";
      elementsHtml += `
        <line x1="40" y1="120" x2="460" y2="120" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3" />
        <text x="50" y="112" fill="#ef4444" font-size="9">Sell Stops Pool (Soporte Obvio Minorista)</text>

        <!-- Wave sweeping -->
        <path d="M 60,80 L 150,120 L 220,90 L 290,120 L 310,155 L 350,60" fill="none" stroke="#3b82f6" stroke-width="3" />
        
        <circle cx="310" cy="155" r="5" fill="#10b981" />
        <arrow x1="310" y1="190" x2="310" y2="162" color="#10b981" />
        <text x="310" y="202" fill="#10b981" font-size="9" font-weight="bold" text-anchor="middle">Barrido de Stops (SSL Sweep)</text>
      `;
      break;

    case 33:
      title = "Fair Value Gap (Ineficiencias)";
      elementsHtml += `
        <!-- Candle 1 -->
        <rect x="80" y="120" width="18" height="30" fill="#10b981" />
        <line x1="89" y1="100" x2="89" y2="160" stroke="#10b981" />
        
        <!-- Candle 2 (aggressive expansion) -->
        <rect x="140" y="40" width="18" height="110" fill="#10b981" />
        <line x1="149" y1="20" x2="149" y2="160" stroke="#10b981" />

        <!-- Candle 3 -->
        <rect x="200" y="20" width="18" height="40" fill="#10b981" />
        <line x1="209" y1="10" x2="209" y2="80" stroke="#10b981" />

        <!-- FVG box between C1 high and C3 low -->
        <rect x="89" y="80" width="120" height="20" fill="rgba(245, 158, 11, 0.08)" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="3,3" />
        <text x="149" y="93" fill="#f59e0b" font-size="8.5" font-weight="bold" text-anchor="middle">Fair Value Gap (FVG)</text>
      `;
      break;

    case 34:
      title = "Fractalidad del Mercado";
      elementsHtml += `
        <!-- Left Panel: HTF Bias -->
        <rect x="35" y="40" width="180" height="130" fill="#131a22" stroke="#242f3d" stroke-width="1.5" rx="6" />
        <text x="125" y="55" fill="#3b82f6" font-size="9" font-weight="bold" text-anchor="middle">HTF BIAS (Marco 1H)</text>
        <path d="M 50,150 L 100,110 L 140,120 L 200,60" fill="none" stroke="#3b82f6" stroke-width="2.5" />
        <circle cx="200" cy="60" r="4.5" fill="#f59e0b" />

        <!-- Right Panel: LTF Gatillo -->
        <rect x="285" y="40" width="180" height="130" fill="#131a22" stroke="#242f3d" stroke-width="1.5" rx="6" />
        <text x="375" y="55" fill="#10b981" font-size="9" font-weight="bold" text-anchor="middle">LTF GATILLO (Marco 1m)</text>
        <path d="M 295,130 L 320,110 L 335,118 L 365,90 L 380,98 L 420,55" fill="none" stroke="#10b981" stroke-width="1.8" />
        
        <!-- Connection Arrow -->
        <path d="M 225,105 L 275,105" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#arr-34)" />
      `;
      break;

    case 35:
      title = "Zonas Premium y Descuento";
      elementsHtml += `
        <!-- Equilibrium line -->
        <line x1="40" y1="100" x2="460" y2="100" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,4" />
        <text x="450" y="93" fill="#f59e0b" font-size="8.5" text-anchor="end">Precio de Equilibrio (50%)</text>
        
        <!-- Premium Box (Red) -->
        <rect x="40" y="30" width="420" height="70" fill="rgba(239, 68, 68, 0.04)" stroke="#ef4444" stroke-width="0.8" />
        <text x="50" y="52" fill="#ef4444" font-size="9.5" font-weight="bold">ZONA PREMIUM: CARO (Solo Ventas)</text>
        
        <!-- Discount Box (Green) -->
        <rect x="40" y="100" width="420" height="70" fill="rgba(16, 185, 129, 0.04)" stroke="#10b981" stroke-width="0.8" />
        <text x="50" y="160" fill="#10b981" font-size="9.5" font-weight="bold">ZONA DE DESCUENTO: BARATO (Solo Compras)</text>
      `;
      break;

    case 36:
      title = "Mitigación y Breaker Blocks";
      const brY = 110;
      elementsHtml += `
        <!-- Original OB box that was broken -->
        <rect x="60" y="${brY}" width="160" height="40" fill="rgba(59, 130, 246, 0.05)" stroke="#3b82f6" stroke-width="1" stroke-dasharray="3,3" />
        <text x="70" y="${brY + 15}" fill="#3b82f6" font-size="8" font-weight="bold">OB Bajista Roto</text>
        
        <!-- Wave retest -->
        <path d="M 40,150 L 140,80 L 180,95 L 260,40 L 320,110 L 380,50" fill="none" stroke="#f3f4f6" stroke-width="3" />
        
        <!-- Retest circle and label -->
        <circle cx="320" cy="110" r="6" fill="#f59e0b" />
        <text x="320" y="135" fill="#f59e0b" font-size="9.5" font-weight="bold" text-anchor="middle">Breaker Block (Test de Soporte)</text>
      `;
      break;

    case 37:
      title = "POC y Subasta de Perfil de Volumen";
      const drawHorizontalVolumeBar = (y, w, isPOC) => {
        const color = isPOC ? "#ef4444" : "#3b82f6";
        return `
          <rect x="${440 - w}" y="${y}" width="${w}" height="8" fill="${color}" fill-opacity="${isPOC ? 0.35 : 0.15}" stroke="${color}" stroke-opacity="0.3" stroke-width="0.5" rx="1" />
        `;
      };
      
      elementsHtml += `
        <!-- Profile bars -->
        ${drawHorizontalVolumeBar(35, 45, false)}
        ${drawHorizontalVolumeBar(50, 60, false)}
        ${drawHorizontalVolumeBar(65, 85, false)}
        ${drawHorizontalVolumeBar(80, 110, false)}
        ${drawHorizontalVolumeBar(95, 175, true)} // POC peak
        ${drawHorizontalVolumeBar(110, 130, false)}
        ${drawHorizontalVolumeBar(125, 95, false)}
        ${drawHorizontalVolumeBar(140, 55, false)}
        ${drawHorizontalVolumeBar(155, 30, false)}

        <!-- POC horizontal line -->
        <line x1="40" y1="99" x2="440" y2="99" stroke="#ef4444" stroke-width="1.8" />
        <rect x="150" y="85" width="150" height="15" fill="#0c1017" rx="2" stroke="#ef4444" stroke-width="0.8" />
        <text x="225" y="96" fill="#ef4444" font-size="8" font-weight="bold" text-anchor="middle">POC (Punto de Control de Volumen Máximo)</text>
      `;
      break;

    case 38:
      title = "Reglas de Drawdown Institucional";
      elementsHtml += `
        <rect x="50" y="40" width="400" height="130" fill="#131a22" stroke="#242f3d" rx="8" />
        <text x="250" y="62" fill="#f3f4f6" font-size="11.5" font-weight="bold" text-anchor="middle">Límites de Preservación de Cuentas Fondeadas</text>
        
        <g font-size="9.5" fill="#9ca3af" transform="translate(80, 92)">
          <text x="0" y="0">Límite Diario (2%):</text>
          <text x="240" y="0" fill="#ef4444" font-weight="bold" text-anchor="end">-$1,000.00 USD</text>

          <text x="0" y="24">Límite Total (5%):</text>
          <text x="240" y="24" fill="#ef4444" font-weight="bold" text-anchor="end">-$2,500.00 USD</text>

          <text x="0" y="48">Target de Beneficio:</text>
          <text x="240" y="48" fill="#10b981" font-weight="bold" text-anchor="end">+$3,000.00 USD</text>
        </g>
      `;
      break;

    case 39:
      title = "Cierres Parciales y Riesgo Cero";
      const entryY = 110;
      const stopY = 145;
      const targetY = 75;
      
      elementsHtml += `
        <!-- Entry line -->
        <line x1="40" y1="${entryY}" x2="440" y2="${entryY}" stroke="#3b82f6" stroke-width="1.5" />
        <text x="45" y="${entryY - 5}" fill="#3b82f6" font-size="8.5">Nivel de Entrada (2 Contratos)</text>

        <!-- SL line original -->
        <line x1="40" y1="${stopY}" x2="440" y2="${stopY}" stroke="#ef4444" stroke-dasharray="2,2" stroke-width="1" opacity="0.5" />
        <text x="45" y="${stopY + 11}" fill="#ef4444" font-size="8.5" opacity="0.6">SL Original (-$100)</text>

        <!-- 1:1 Target met -->
        <line x1="40" y1="${targetY}" x2="440" y2="${targetY}" stroke="#10b981" stroke-width="1.5" stroke-dasharray="2,2" />
        <text x="45" y="${targetY - 5}" fill="#10b981" font-size="8.5">R:R 1:1 Met (Cierre del 50% +$50 y SL a Entrada/Riesgo Cero)</text>
      `;
      break;

    case 40:
      title = "El Checklist de Albert Sierra";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#131a22" stroke="#d4af37" stroke-width="1.5" rx="8" />
        <text x="250" y="48" fill="#d4af37" font-size="11.5" font-weight="bold" text-anchor="middle">Checklist Institucional de Confluencias</text>
      `;
      const finalRules = [
        "1. Contexto HTF: ¿Identificamos Order Block / FVG de 1H?",
        "2. Caza de Stops: ¿Ocurrió barrido de liquidez previo (SSL/BSL)?",
        "3. Gatillo Estructural: ¿Ocurrió BOS de confirmación local en 1m?",
        "4. Zona de Rango: ¿Buscamos operar en Descuento (largos) o Premium?"
      ];
      finalRules.forEach((str, i) => {
        const y = 66 + i * 26;
        elementsHtml += `
          <circle cx="75" cy="${y}" r="8" fill="rgba(212,175,55,0.1)" stroke="#d4af37" stroke-width="1.5" />
          <polyline points="72 ${y}, 74 ${y+3}, 78 ${y-3}" fill="none" stroke="#d4af37" stroke-width="2" />
          <text x="95" y="${y + 3}" fill="#f3f4f6" font-size="9.5" font-weight="bold">${str}</text>
        `;
      });
      break;

    default:
      return "";
  }

  return `
    <div class="lesson-chart">
      <svg viewBox="0 0 ${width} ${height}" width="100%" height="${height}" xmlns="http://www.w3.org/2000/svg">
        ${elementsHtml}
      </svg>
      <div class="lesson-chart-title">
        <i data-lucide="bar-chart-2" style="width: 14px; height: 14px; color: var(--color-accent);"></i>
        <span>Diagrama de Apoyo: ${title}</span>
      </div>
    </div>
  `;
};

  // Load Day details dynamically
window.loadDay = (dayId) => {
  const day = courseData[dayId];
  if (!day || !day.unlocked) return;

  activeDayId = dayId;
  activeSection = "academy-day";

  document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
  document.querySelectorAll(".menu-item").forEach(item => item.classList.remove("active"));

  const academyDaySection = document.getElementById("academy-day");
  if (academyDaySection) {
    academyDaySection.classList.add("active");
  }

  // Set visual texts
  document.getElementById("academy-day-title").innerHTML = `<i data-lucide="book-open"></i> Día ${dayId.replace("day", "")}: ${day.title}`;
  
  const dayNum = parseInt(dayId.replace("day", ""));
  const graphicHtml = getGraphicForDay(dayNum);
  document.getElementById("academy-day-content").innerHTML = (graphicHtml || "") + day.content;
  document.getElementById("academy-challenge-text").innerText = day.challenge;
  
  document.getElementById("btn-narrate-day").setAttribute("data-day", dayId);

  // Load saved challenge text
  const savedResponse = localStorage.getItem(`vision_challenge_${dayId}`) || "";
  document.getElementById("challenge-response").value = savedResponse;

  // Toggle Quiz displaying if review day
  const quizCard = document.getElementById("academy-quiz-card");
  
  if ([7, 15, 22, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40].includes(dayNum)) {
    quizCard.style.display = "block";
    renderPilarQuiz(day.pilar);
  } else {
    quizCard.style.display = "none";
  }

  // Toggle Next Lesson button
  const nextBtn = document.getElementById("btn-next-lesson-audio");
  if (nextBtn) {
    const nextDayId = `day${dayNum + 1}`;
    if (courseData[nextDayId]) {
      nextBtn.style.display = "inline-flex";
    } else {
      nextBtn.style.display = "none";
    }
  }

  activePilarAccordion = day.pilar;
  renderAcademicMenu();
  stopAllSpeech();
  lucide.createIcons();
};

const renderPilarQuiz = (pilarId) => {
  activeQuizAnswers = {};
  const container = document.getElementById("academy-quiz-container");
  if (!container) return;

  const questions = pilarQuizzes[pilarId];
  if (!questions) return;

  let html = `<div class="quiz-questions-wrapper">`;

  questions.forEach((qObj, qIndex) => {
    html += `
      <div class="quiz-question-block" style="margin-bottom: 24px; border-bottom: 1px dashed var(--border-color); padding-bottom: 20px;" data-q-index="${qIndex}">
        <p class="quiz-question" style="font-size: 1rem; font-weight: 600; color: var(--text-primary); margin-bottom: 12px;">${qIndex + 1}. ${qObj.q}</p>
        <div class="quiz-options" style="display:flex; flex-direction:column; gap:8px;">
    `;

    qObj.options.forEach((opt, optIndex) => {
      html += `
        <button class="quiz-option" onclick="handleSelectOption(${pilarId}, ${qIndex}, ${optIndex}, this)">
          ${opt}
        </button>
      `;
    });

    html += `
        </div>
        <div class="quiz-feedback" id="feedback-pilar-${pilarId}-${qIndex}"></div>
      </div>
    `;
  });

  html += `</div>`;

  // Submit button
  html += `
    <div class="quiz-action-bar">
      <button class="btn btn-success" id="btn-submit-quiz-pilar" onclick="submitPilarQuiz(${pilarId})" disabled>
        <i data-lucide="check"></i> Evaluar Cuestionario Semanal
      </button>
    </div>
  `;

  container.innerHTML = html;
  lucide.createIcons();
};

// Handle quiz option selecting
window.handleSelectOption = (pilarId, qIndex, optIndex, buttonElement) => {
  if (pilarPassedStates[pilarId]) return; // Stop if already passed

  const questionBlock = buttonElement.closest(".quiz-question-block");
  questionBlock.querySelectorAll(".quiz-option").forEach(btn => {
    btn.classList.remove("correct", "incorrect");
    btn.style.borderColor = "var(--border-color)";
    btn.style.background = "var(--bg-tertiary)";
  });

  buttonElement.style.borderColor = "var(--color-accent)";
  buttonElement.style.background = "rgba(59, 130, 246, 0.08)";

  activeQuizAnswers[qIndex] = optIndex;

  const total = pilarQuizzes[pilarId].length;
  const answered = Object.keys(activeQuizAnswers).length;
  
  const submitBtn = document.getElementById("btn-submit-quiz-pilar");
  if (submitBtn) {
    submitBtn.disabled = answered !== total;
  }
};

// Evaluate Pilar Quiz answers
window.submitPilarQuiz = (pilarId) => {
  const container = document.getElementById("academy-quiz-container");
  const questions = pilarQuizzes[pilarId];
  let correctCount = 0;

  questions.forEach((qObj, qIndex) => {
    const selected = activeQuizAnswers[qIndex];
    const questionBlock = container.querySelector(`[data-q-index="${qIndex}"]`);
    const options = questionBlock.querySelectorAll(".quiz-option");
    const feedbackEl = document.getElementById(`feedback-pilar-${pilarId}-${qIndex}`);

    options.forEach(btn => btn.classList.add("disabled"));

    if (selected === qObj.answer) {
      correctCount++;
      options[selected].classList.add("correct");
      feedbackEl.className = "quiz-feedback correct";
      feedbackEl.innerHTML = `<strong>🟢 ¡Correcto!</strong> ${qObj.explanation}`;
    } else {
      options[selected].classList.add("incorrect");
      options[qObj.answer].classList.add("correct");
      feedbackEl.className = "quiz-feedback incorrect";
      feedbackEl.innerHTML = `<strong>🔴 Incorrecto.</strong> ${qObj.explanation}`;
    }
  });

  const passed = correctCount === questions.length;
  const actionBar = container.querySelector(".quiz-action-bar");

  if (passed) {
    pilarPassedStates[pilarId] = true;
    
    // Mark the review day as completed
    courseData[activeDayId].completed = true;
    
    // Unlock next day
    const dayNum = parseInt(activeDayId.replace("day", ""));
    const nextDayId = `day${dayNum + 1}`;
    if (courseData[nextDayId]) {
      courseData[nextDayId].unlocked = true;
    }

    saveProgress();
    updateUIProgress();
    renderAcademicMenu();

    actionBar.innerHTML = `
      <div class="quiz-completed-overlay" style="width: 100%;">
        <div class="quiz-score-circle">5/5</div>
        <h4 style="color: var(--color-bull); margin-bottom: 8px;">🎉 Pilar Aprobado con Éxito</h4>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 16px;">Has asimilado perfectamente las reglas innegociables de este pilar.</p>
        ${courseData[nextDayId]
          ? `<button class="btn btn-success" onclick="window.loadDay('${nextDayId}')">Siguiente Semana <i data-lucide='arrow-right'></i></button>`
          : `<button class="btn btn-success" onclick="showSection('certificate')">Obtener Mi Diploma <i data-lucide='award'></i></button>`
        }
      </div>
    `;
  } else {
    actionBar.innerHTML = `
      <div class="quiz-completed-overlay" style="width: 100%;">
        <div class="quiz-score-circle fail">${correctCount}/5</div>
        <h4 style="color: var(--color-bear); margin-bottom: 8px;">⚠️ Cuestionario No Superado</h4>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 16px;">Para avanzar de pilar debes responder correctamente el 100% de las preguntas operativas.</p>
        <button class="btn btn-secondary" onclick="renderPilarQuiz(${pilarId})">Reintentar Cuestionario</button>
      </div>
    `;
  }
  lucide.createIcons();
};

// Technical Glossary terms database
const glossaryTerms = [
  { term: "CME (Chicago Mercantile Exchange)", desc: "El mercado y bolsa regulada centralizada más grande del mundo para la negociación de contratos de futuros de índices, divisas y materias primas." },
  { term: "Margin Call (Llamada de Margen)", desc: "Aviso de advertencia del broker cuando el capital de tu cuenta cae por debajo del margen de mantenimiento debido a pérdidas flotantes. Conlleva la liquidación inmediata de posiciones." },
  { term: "Daily Drawdown", desc: "El límite máximo de pérdidas permitido en un solo día operativo. Sirve de freno financiero para proteger al trader de rachas perdedoras desastrosas." },
  { term: "BOS (Break of Structure)", desc: "Quiebre de Estructura. Ocurre cuando el precio quiebra con fuerza el último mínimo ascendente (HL) en tendencia alcista o el máximo descendente (LH) en tendencia bajista, indicando giros." },
  { term: "Tick y Punto", desc: "Fluctuaciones de precio. Un Tick es el movimiento mínimo de cotización (0.25 en ES/NQ). Un Punto equivale a 4 ticks enteros ($50 en ES, $20 en NQ por contrato)." },
  { term: "FVG (Fair Value Gap)", desc: "Iniciativa e ineficiencia en el precio provocada por compras o ventas agresivas que dejan un desequilibrio de liquidez en un patrón de 3 velas consecutivas." },
  { term: "Order Block (Bloque de Órdenes)", desc: "Zonas de precios donde las instituciones financieras acumularon un volumen masivo de órdenes de compra o venta en el pasado y donde se espera una reacción fuerte." },
  { term: "Slippage (Deslizamiento)", desc: "La diferencia de precio entre el valor solicitado de tu orden de compra/venta y el precio real al que se ejecuta en el mercado debido a la volatilidad." },
  { term: "Asimetría Matemática", desc: "La relación donde la ganancia promedio de tus aciertos es considerablemente mayor a la pérdida promedio de tus trades perdedores (R:B 1:2 o superior)." },
  { term: "FOMO", desc: "Miedo a quedar fuera (Fear of Missing Out). Impulso psicológico destructivo que empuja al trader a comprar precios inflados o vender precios bajos sin esperar a su setup." }
];

const renderGlossary = () => {
  const container = document.getElementById("glossary-container");
  if (!container) return;

  let html = "";
  glossaryTerms.forEach(item => {
    html += `
      <div class="concept-card">
        <div class="concept-card-title"><i data-lucide="book-open" style="width:14px; height:14px; color:var(--color-accent);"></i> ${item.term}</div>
        <p style="font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary); margin-top: 5px;">${item.desc}</p>
      </div>
    `;
  });
  
  container.innerHTML = html;
  lucide.createIcons();
};

// Render Certificate Completion info
const renderCertificate = () => {
  const nameInput = document.getElementById("cert-student-name");
  const dateText = document.getElementById("cert-date-str");
  
  if (nameInput) {
    const storedName = localStorage.getItem("vision_student_name") || "Albert Sierra";
    nameInput.textContent = storedName;
  }
  if (dateText) {
    dateText.textContent = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  }
};

const getApiKey = () => {
  const stored = localStorage.getItem("vision_elevenlabs_api_key");
  if (!stored || stored === "null" || stored === "undefined" || stored.trim() === "") {
    return "sk_cf0eff44faa9a9838a53af3850a02dc60c96e883b95570ce";
  }
  return stored.trim();
};

const getVoiceId = () => {
  const stored = localStorage.getItem("vision_elevenlabs_voice_id");
  if (!stored || stored === "null" || stored === "undefined" || stored.trim() === "") {
    return "c6rAmJGsdzNWAIVkws45"; // Default voice ID (Albert Sierra)
  }
  return stored.trim();
};

// Audio Narration functions with ElevenLabs & Browser Web Speech
let activeAudio = null;
let activeNarratorButton = null;

const stopAllSpeech = () => {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio = null;
  }
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  
  const btn = document.getElementById("btn-narrate-day");
  if (btn) {
    btn.classList.remove("active");
    btn.style.background = "";
    btn.style.color = "";
    btn.style.borderColor = "";
    const span = btn.querySelector("span");
    if (span) span.textContent = "Narrar Lección";
    const icon = btn.querySelector("i");
    if (icon) icon.setAttribute("data-lucide", "volume-2");
  }
  lucide.createIcons();
  activeNarratorButton = null;
};

const handleNarrateClick = async (dayId, button) => {
  if (button === activeNarratorButton) {
    stopAllSpeech();
    return;
  }

  stopAllSpeech();

  const day = courseData[dayId];
  if (!day) return;

  const container = document.getElementById("academy-day-content");
  if (!container) return;

  const textToRead = container.innerText || container.textContent;
  const apiKey = getApiKey();
  const voiceId = getVoiceId();

  if (apiKey) {
    try {
      button.disabled = true;
      button.classList.add("loading");
      button.querySelector("span").textContent = "Generando Audio...";
      
      console.log(`[Narrador] Enviando petición a ElevenLabs. Voice ID: ${voiceId}`);
      
      const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": apiKey
        },
        body: JSON.stringify({
          text: textToRead.substring(0, 4800), // Safety cap limit
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.75,
            similarity_boost: 0.85,
            style: 0.05,
            use_speaker_boost: true
          }
        })
      });

      if (!response.ok) {
        let errMsg = `Código ${response.status}`;
        try {
          const errJson = await response.json();
          if (errJson && errJson.detail && errJson.detail.message) {
            errMsg = errJson.detail.message;
          }
        } catch (e) {
          errMsg = response.statusText || errMsg;
        }
        throw new Error(errMsg);
      }

      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);
      activeAudio = new Audio(audioUrl);
      
      button.disabled = false;
      button.classList.remove("loading");
      button.classList.add("active");
      button.style.background = "rgba(16, 185, 129, 0.15)";
      button.style.color = "var(--color-bull)";
      button.style.borderColor = "var(--color-bull)";
      button.querySelector("span").textContent = "Detener";
      button.querySelector("i").setAttribute("data-lucide", "square");
      lucide.createIcons();
      activeNarratorButton = button;

      console.log(`[Narrador] Reproduciendo audio generado por ElevenLabs.`);
      activeAudio.play();
      activeAudio.onended = () => {
        stopAllSpeech();
      };
    } catch (err) {
      button.disabled = false;
      button.classList.remove("loading");
      button.querySelector("span").textContent = "Narrar Lección";
      console.warn(`[Narrador] Error con ElevenLabs: ${err.message}. Usando fallback.`);
      alert(`Error con ElevenLabs: ${err.message}. Usando el narrador gratuito por defecto...`);
      speakBrowser(textToRead, button);
    }
  } else {
    console.log(`[Narrador] No hay API Key configurada. Usando Web Speech API del navegador.`);
    speakBrowser(textToRead, button);
  }
};

const speakBrowser = (text, button) => {
  if (!window.speechSynthesis) {
    alert("Tu navegador no soporta síntesis de voz.");
    return;
  }

  window.speechSynthesis.cancel();
  const cleanText = text.replace(/\s+/g, " ").trim();

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = "es-ES";
  
  const voices = window.speechSynthesis.getVoices();
  // Intentar buscar una voz en español masculina por nombre/palabras clave
  let esVoice = voices.find(v => {
    const nameLower = v.name.toLowerCase();
    const isSpanish = v.lang.startsWith("es-ES") || v.lang.startsWith("es");
    const isMale = nameLower.includes("male") || 
                   nameLower.includes("hombre") || 
                   nameLower.includes("jorge") || 
                   nameLower.includes("alvaro") || 
                   nameLower.includes("david") || 
                   nameLower.includes("julio");
    return isSpanish && isMale;
  });

  if (!esVoice) {
    esVoice = voices.find(v => v.lang.startsWith("es-ES") || v.lang.startsWith("es"));
  }

  if (esVoice) {
    utterance.voice = esVoice;
  }

  utterance.onstart = () => {
    button.classList.add("active");
    button.style.background = "rgba(59, 130, 246, 0.15)";
    button.style.color = "var(--color-accent)";
    button.style.borderColor = "var(--color-accent)";
    button.querySelector("span").textContent = "Detener";
    button.querySelector("i").setAttribute("data-lucide", "square");
    lucide.createIcons();
    activeNarratorButton = button;
  };

  utterance.onend = () => {
    stopAllSpeech();
  };

  utterance.onerror = () => {
    stopAllSpeech();
  };

  window.speechSynthesis.speak(utterance);
};

// Export Trading Plan custom generator
const exportTradingPlan = () => {
  const capital = document.getElementById("calc-capital").value || "10000";
  const riskPct = document.getElementById("calc-risk-pct").value || "1";
  const assetSelect = document.getElementById("calc-asset");
  const assetName = assetSelect ? assetSelect.options[assetSelect.selectedIndex].text : "E-mini S&P 500 (ES)";
  const slPuntos = document.getElementById("calc-sl-ticks").value || "10";
  
  const riskMoney = document.getElementById("res-risk-money") ? document.getElementById("res-risk-money").textContent : `$${(capital * riskPct / 100).toFixed(2)}`;
  const contracts = document.getElementById("res-contracts") ? document.getElementById("res-contracts").textContent : "0 Contratos";
  
  const planWindow = window.open("", "_blank");
  planWindow.document.write(`
    <html>
    <head>
      <title>Plan de Trading Personalizado - Visión Trading Pro</title>
      <style>
        body {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          background-color: #ffffff;
          color: #0b0e14;
          padding: 45px;
          line-height: 1.6;
        }
        .header {
          text-align: center;
          border-bottom: 2px solid #10b981;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .title {
          font-size: 24px;
          font-weight: bold;
          color: #0b0e14;
          margin: 0;
          letter-spacing: 1.5px;
        }
        .subtitle {
          font-size: 11px;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-top: 5px;
        }
        .section {
          margin-bottom: 30px;
        }
        .section-title {
          font-size: 15px;
          font-weight: bold;
          color: #10b981;
          border-bottom: 1.5px solid #e5e7eb;
          padding-bottom: 5px;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        .item {
          background: #f9fafb;
          padding: 12px 16px;
          border-radius: 6px;
          border: 1px solid #e5e7eb;
        }
        .label {
          font-size: 10px;
          color: #6b7280;
          text-transform: uppercase;
          font-weight: bold;
          letter-spacing: 0.5px;
        }
        .value {
          font-size: 16px;
          font-weight: bold;
          color: #0b0e14;
          margin-top: 4px;
        }
        .rules-list {
          padding-left: 20px;
          margin: 0;
        }
        .rules-list li {
          margin-bottom: 12px;
        }
        .footer {
          margin-top: 60px;
          text-align: center;
          font-size: 11px;
          color: #9ca3af;
          border-top: 1px solid #e5e7eb;
          padding-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="title">PLAN DE TRADING PERSONALIZADO</div>
        <div class="subtitle">Estrategia Cuantitativa - Visión Trading Pro</div>
      </div>
      
      <div class="section">
        <div class="section-title">Parámetros de Capital y Gestión de Riesgo</div>
        <div class="grid">
          <div class="item">
            <div class="label">Capital Operativo</div>
            <div class="value">$${parseFloat(capital).toLocaleString('en-US', {minimumFractionDigits: 2})} USD</div>
          </div>
          <div class="item">
            <div class="label">Riesgo Permitido por Operación</div>
            <div class="value">${riskPct}% por Operación</div>
          </div>
          <div class="item">
            <div class="label">Riesgo Máximo en Dinero</div>
            <div class="value" style="color: #ef4444;">${riskMoney}</div>
          </div>
          <div class="item">
            <div class="label">Tamaño de Posición Óptimo</div>
            <div class="value" style="color: #3b82f6;">${contracts}</div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Reglas Operativas de Ejecución</div>
        <ul class="rules-list">
          <li><strong>Dirección de Tendencia (Filtro EMA 200)</strong>: Solo buscar compras si el precio está arriba de la EMA 200. Solo buscar ventas si está abajo. Está terminantemente prohibido operar en contra de la pendiente de la EMA 200.</li>
          <li><strong>Gatillo de Impulso (RSI 14)</strong>: Esperar el cruce de RSI sobre la línea central de 50 (en vela cerrada) para largos o bajo 50 para cortos. La entrada se realiza estrictamente en la apertura de la vela siguiente.</li>
          <li><strong>Fijación del Stop Loss Técnico</strong>: Ubicar el Stop Loss 1 punto por debajo del mínimo de oscilación reciente (Swing Low) para largos o por encima del máximo reciente (Swing High) para cortos. No usar tamaños aleatorios.</li>
          <li><strong>Salida Asimétrica Take Profit</strong>: Colocar el Take Profit exactamente a un ratio 1:2. Por cada dólar arriesgado en el stop loss, ir a buscar dos dólares de ganancia en el take profit.</li>
          <li><strong>Drawdown Máximo Diario</strong>: Pérdida diaria máxima fijada en 2 operaciones fallidas consecutivas (2%). Al alcanzar este límite, se apagarán las pantallas de inmediato sin excepciones emocionales.</li>
        </ul>
      </div>

      <div class="section">
        <div class="section-title">Compromiso de Disciplina</div>
        <p><em>"Entiendo que el mercado es un entorno de probabilidades y no de certezas. Mi trabajo no es tener la razón en cada operación individual, sino ejecutar mi ventaja estadística con disciplina inquebrantable y dejar que las matemáticas jueguen a mi favor en el largo plazo."</em></p>
      </div>

      <div class="footer">
        Plan de Trading Personalizado &copy; 2026. Generado bajo la guía de Visión Trading Pro.
      </div>

      <script>
        window.onload = function() {
          window.print();
        };
      </script>
    </body>
    </html>
  `);
  planWindow.document.close();
};

// Initialize app components on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  // Force initialize or upgrade the API Key if empty, corrupt, or matching the old key
  const currentKey = localStorage.getItem("vision_elevenlabs_api_key");
  const defaultKey = "sk_cf0eff44faa9a9838a53af3850a02dc60c96e883b95570ce";
  const oldKey = "sk_d3c40fb422b9d257c30601542793b1787034f3e29f41d984";

  if (!currentKey || currentKey === "null" || currentKey === "undefined" || currentKey.trim() === "" || currentKey === oldKey) {
    localStorage.setItem("vision_elevenlabs_api_key", defaultKey);
  }

  // Navigation Menu Event Listeners
  document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", () => {
      const target = item.getAttribute("data-target");
      showSection(target);
    });
  });

  // Narrate click listener
  const btnNarrate = document.getElementById("btn-narrate-day");
  if (btnNarrate) {
    btnNarrate.addEventListener("click", () => {
      const dayId = btnNarrate.getAttribute("data-day");
      handleNarrateClick(dayId, btnNarrate);
    });
  }

  // Save Challenge Response listener
  const btnSaveChallenge = document.getElementById("btn-save-challenge");
  if (btnSaveChallenge) {
    btnSaveChallenge.addEventListener("click", () => {
      const response = document.getElementById("challenge-response").value.trim();
      if (!response) {
        alert("Escribe una respuesta para el desafío de hoy antes de guardarlo en tu bitácora.");
        return;
      }

      localStorage.setItem(`vision_challenge_${activeDayId}`, response);
      alert("¡Entrada de Bitácora Guardada con Éxito!");

      const dayNum = parseInt(activeDayId.replace("day", ""));
      const isExamDay = [7, 15, 22, 30].includes(dayNum);

      if (!isExamDay) {
        courseData[activeDayId].completed = true;
        
        const nextDayId = `day${dayNum + 1}`;
        if (courseData[nextDayId]) {
          courseData[nextDayId].unlocked = true;
        }
        
        saveProgress();
        updateUIProgress();
        renderAcademicMenu();
      } else {
        const pilarId = courseData[activeDayId].pilar;
        if (pilarPassedStates[pilarId]) {
          courseData[activeDayId].completed = true;
          const nextDayId = `day${dayNum + 1}`;
          if (courseData[nextDayId]) {
            courseData[nextDayId].unlocked = true;
          }
          saveProgress();
          updateUIProgress();
          renderAcademicMenu();
        } else {
          alert("Desafío guardado. Recuerda que para avanzar debes aprobar el examen semanal de abajo con 100% de aciertos.");
        }
      }
    });
  }

  // Toggle Focus Mode listener
  const btnToggleFocus = document.getElementById("btn-toggle-focus");
  if (btnToggleFocus) {
    btnToggleFocus.addEventListener("click", () => {
      const body = document.body;
      body.classList.toggle("focus-mode-active");
      
      const span = btnToggleFocus.querySelector("span");
      const icon = btnToggleFocus.querySelector("i");
      
      if (body.classList.contains("focus-mode-active")) {
        span.textContent = "Salir Enfoque";
        if (icon) icon.setAttribute("data-lucide", "minimize-2");
      } else {
        span.textContent = "Modo Enfoque";
        if (icon) icon.setAttribute("data-lucide", "maximize-2");
      }
      lucide.createIcons();
    });
  }

  // Export Plan listener
  const btnExportPlan = document.getElementById("btn-export-plan");
  if (btnExportPlan) {
    btnExportPlan.addEventListener("click", exportTradingPlan);
  }

  // Print Certificate listener
  const btnPrintCert = document.getElementById("btn-print-cert");
  if (btnPrintCert) {
    btnPrintCert.addEventListener("click", () => {
      // Prompt for name customization
      const currentName = localStorage.getItem("vision_student_name") || "Albert Sierra";
      const customizedName = prompt("Escribe tu nombre y apellido tal como deseas que aparezca en tu diploma:", currentName);
      
      if (customizedName !== null && customizedName.trim() !== "") {
        localStorage.setItem("vision_student_name", customizedName.trim());
        renderCertificate();
        window.print();
      } else if (customizedName !== null) {
        alert("Por favor introduce un nombre válido.");
      }
    });
  }

  // Audio settings modal setup
  const btnAudioSettings = document.getElementById("btn-audio-settings");
  const audioSettingsModal = document.getElementById("audio-settings-modal");
  const btnCloseAudioModal = document.getElementById("btn-close-audio-modal");
  const btnSaveAudioSettings = document.getElementById("btn-save-audio-settings");
  const elApiKeyInput = document.getElementById("el-api-key");
  const elVoiceSelect = document.getElementById("el-voice-select");
  const elCustomVoiceGroup = document.getElementById("el-custom-voice-group");
  const elVoiceIdInput = document.getElementById("el-voice-id");

  if (btnAudioSettings) {
    elApiKeyInput.value = getApiKey();

    // Initialize voice select from localStorage
    const savedVoiceId = localStorage.getItem("vision_elevenlabs_voice_id") || "c6rAmJGsdzNWAIVkws45";
    if (elVoiceSelect) {
      if (["c6rAmJGsdzNWAIVkws45", "ErXwobaYiN019PkySvjV"].includes(savedVoiceId)) {
        elVoiceSelect.value = savedVoiceId;
        if (elCustomVoiceGroup) elCustomVoiceGroup.style.display = "none";
      } else {
        elVoiceSelect.value = "custom";
        if (elCustomVoiceGroup) elCustomVoiceGroup.style.display = "block";
      }
      if (elVoiceIdInput) elVoiceIdInput.value = savedVoiceId;
    }

    if (elVoiceSelect) {
      elVoiceSelect.addEventListener("change", () => {
        if (elVoiceSelect.value === "custom") {
          if (elCustomVoiceGroup) elCustomVoiceGroup.style.display = "block";
        } else {
          if (elCustomVoiceGroup) elCustomVoiceGroup.style.display = "none";
          if (elVoiceIdInput) elVoiceIdInput.value = elVoiceSelect.value;
        }
      });
    }

    btnAudioSettings.addEventListener("click", () => {
      audioSettingsModal.style.display = "flex";
    });

    btnCloseAudioModal.addEventListener("click", () => {
      audioSettingsModal.style.display = "none";
    });

    btnSaveAudioSettings.addEventListener("click", () => {
      const apiKey = elApiKeyInput.value.trim();
      const voiceId = elVoiceIdInput ? elVoiceIdInput.value.trim() : "";
      
      if (apiKey) {
        localStorage.setItem("vision_elevenlabs_api_key", apiKey);
      } else {
        localStorage.removeItem("vision_elevenlabs_api_key");
      }

      if (voiceId) {
        localStorage.setItem("vision_elevenlabs_voice_id", voiceId);
      } else {
        localStorage.removeItem("vision_elevenlabs_voice_id");
      }

      alert("Configuración de audio guardada correctamente.");
      audioSettingsModal.style.display = "none";
    });

    audioSettingsModal.addEventListener("click", (e) => {
      if (e.target === audioSettingsModal) {
        audioSettingsModal.style.display = "none";
      }
    });
  }

  // Load progress, render accordions, render glossary
  loadProgress();
  renderAcademicMenu();
  renderGlossary();
});

// Global Function to navigate to the next lesson and trigger audio narration automatically
window.goToNextLesson = (autoPlayAudio) => {
  const currentDayNum = parseInt(activeDayId.replace("day", ""));
  const nextDayId = `day${currentDayNum + 1}`;

  if (!courseData[nextDayId]) {
    alert("Has completado todo el curso. ¡Felicidades, Trader Soberano!");
    return;
  }

  // Save current challenge response automatically if they wrote something
  const responseField = document.getElementById("challenge-response");
  const responseText = responseField ? responseField.value.trim() : "";

  if (responseText) {
    localStorage.setItem(`vision_challenge_${activeDayId}`, responseText);
    const dayNum = parseInt(activeDayId.replace("day", ""));
    const isExamDay = [7, 15, 22, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40].includes(dayNum);

    if (!isExamDay) {
      courseData[activeDayId].completed = true;
      courseData[nextDayId].unlocked = true;
      saveProgress();
      updateUIProgress();
      renderAcademicMenu();
    } else {
      const pilarId = courseData[activeDayId].pilar;
      if (pilarPassedStates[pilarId]) {
        courseData[activeDayId].completed = true;
        courseData[nextDayId].unlocked = true;
        saveProgress();
        updateUIProgress();
        renderAcademicMenu();
      } else {
        alert("Desafío guardado. Recuerda que para avanzar de pilar debes aprobar la evaluación semanal de abajo.");
        return;
      }
    }
  } else if (!courseData[nextDayId].unlocked) {
    alert("Debes escribir y registrar tu respuesta al desafío de hoy antes de avanzar.");
    return;
  }

  // Load next day
  window.loadDay(nextDayId);

  // Auto-play audio if requested
  if (autoPlayAudio) {
    setTimeout(() => {
      const btnNarrate = document.getElementById("btn-narrate-day");
      if (btnNarrate) {
        handleNarrateClick(nextDayId, btnNarrate);
      }
    }, 450);
  }
};
