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

  // MetaTrader 5 Ticker settings
  let ticker = "EURUSD,M5";
  let timeframe = "1.08250 1.08285 1.08220 1.08260";
  let minPrice = 4300;
  let maxPrice = 4350;
  let timeLabels = ["09:30", "10:00", "10:30", "11:00", "11:30"];
  let watermarkText = "METATRADER 5";

  // Predefined realistic datasets
  const uptrend = [
    {o: 4302, c: 4308, h: 4310, l: 4300, v: 120},
    {o: 4308, c: 4305, h: 4311, l: 4304, v: 80},
    {o: 4305, c: 4312, h: 4314, l: 4303, v: 150},
    {o: 4312, c: 4310, h: 4315, l: 4308, v: 95},
    {o: 4310, c: 4318, h: 4320, l: 4309, v: 165},
    {o: 4318, c: 4315, h: 4319, l: 4312, v: 110},
    {o: 4315, c: 4326, h: 4328, l: 4314, v: 240},
    {o: 4326, c: 4322, h: 4327, l: 4320, v: 130},
    {o: 4322, c: 4332, h: 4334, l: 4321, v: 280},
    {o: 4332, c: 4328, h: 4333, l: 4326, v: 140},
    {o: 4328, c: 4338, h: 4340, l: 4327, v: 310},
    {o: 4338, c: 4334, h: 4339, l: 4332, v: 150},
    {o: 4334, c: 4344, h: 4347, l: 4333, v: 350},
    {o: 4344, c: 4340, h: 4346, l: 4339, v: 160},
    {o: 4340, c: 4348, h: 4350, l: 4338, v: 390}
  ];

  const downtrend = [
    {o: 4348, c: 4342, h: 4350, l: 4340, v: 110},
    {o: 4342, c: 4345, h: 4347, l: 4341, v: 80},
    {o: 4345, c: 4338, h: 4346, l: 4336, v: 140},
    {o: 4338, c: 4340, h: 4342, l: 4337, v: 90},
    {o: 4340, c: 4332, h: 4341, l: 4330, v: 170},
    {o: 4332, c: 4335, h: 4337, l: 4331, v: 100},
    {o: 4335, c: 4325, h: 4336, l: 4323, v: 210},
    {o: 4325, c: 4328, h: 4330, l: 4324, v: 120},
    {o: 4328, c: 4318, h: 4329, l: 4316, v: 240},
    {o: 4318, c: 4321, h: 4323, l: 4317, v: 115},
    {o: 4321, c: 4310, h: 4322, l: 4308, v: 280},
    {o: 4310, c: 4313, h: 4315, l: 4309, v: 130},
    {o: 4313, c: 4302, h: 4314, l: 4300, v: 330},
    {o: 4302, c: 4305, h: 4307, l: 4301, v: 145},
    {o: 4305, c: 4295, h: 4306, l: 4292, v: 370}
  ];

  const range = [
    {o: 4320, c: 4324, h: 4327, l: 4318, v: 100},
    {o: 4324, c: 4318, h: 4326, l: 4316, v: 80},
    {o: 4318, c: 4326, h: 4328, l: 4317, v: 130},
    {o: 4326, c: 4322, h: 4328, l: 4320, v: 90},
    {o: 4322, c: 4316, h: 4324, l: 4315, v: 110},
    {o: 4316, c: 4323, h: 4325, l: 4315, v: 95},
    {o: 4323, c: 4327, h: 4329, l: 4321, v: 140},
    {o: 4327, c: 4320, h: 4328, l: 4318, v: 105},
    {o: 4320, c: 4325, h: 4327, l: 4319, v: 115},
    {o: 4325, c: 4317, h: 4326, l: 4315, v: 125},
    {o: 4317, c: 4324, h: 4326, l: 4316, v: 100},
    {o: 4324, c: 4321, h: 4326, l: 4319, v: 85},
    {o: 4321, c: 4328, h: 4330, l: 4320, v: 150},
    {o: 4328, c: 4319, h: 4329, l: 4318, v: 110},
    {o: 4319, c: 4325, h: 4327, l: 4317, v: 130}
  ];

  const sslSweep = [
    {o: 4320, c: 4324, h: 4327, l: 4318, v: 90},
    {o: 4324, c: 4318, h: 4326, l: 4316, v: 80},
    {o: 4318, c: 4325, h: 4327, l: 4317, v: 110},
    {o: 4325, c: 4321, h: 4326, l: 4320, v: 95},
    {o: 4321, c: 4315, h: 4323, l: 4314, v: 120},
    {o: 4315, c: 4322, h: 4324, l: 4314, v: 85},
    {o: 4322, c: 4315, h: 4324, l: 4314, v: 105},
    {o: 4315, c: 4296, h: 4316, l: 4292, v: 450}, // sweep
    {o: 4296, c: 4316, h: 4318, l: 4294, v: 380},
    {o: 4316, c: 4328, h: 4330, l: 4315, v: 290},
    {o: 4328, c: 4325, h: 4330, l: 4323, v: 140},
    {o: 4325, c: 4335, h: 4338, l: 4324, v: 240},
    {o: 4335, c: 4342, h: 4344, l: 4333, v: 280}
  ];

  const squeeze = [
    {o: 4310, c: 4312, h: 4315, l: 4308, v: 85},
    {o: 4312, c: 4309, h: 4314, l: 4307, v: 70},
    {o: 4309, c: 4315, h: 4317, l: 4308, v: 110},
    {o: 4315, c: 4311, h: 4316, l: 4310, v: 75},
    {o: 4311, c: 4315, h: 4317, l: 4310, v: 95},
    {o: 4315, c: 4313, h: 4316, l: 4311, v: 60},
    {o: 4313, c: 4330, h: 4332, l: 4312, v: 390},
    {o: 4330, c: 4348, h: 4350, l: 4329, v: 490}, // breakout
    {o: 4348, c: 4354, h: 4356, l: 4345, v: 410},
    {o: 4354, c: 4350, h: 4356, l: 4348, v: 180},
    {o: 4350, c: 4362, h: 4364, l: 4349, v: 340}
  ];

  const fakeout = [
    {o: 4315, c: 4320, h: 4322, l: 4313, v: 100},
    {o: 4320, c: 4316, h: 4322, l: 4314, v: 80},
    {o: 4316, c: 4324, h: 4326, l: 4315, v: 110},
    {o: 4324, c: 4320, h: 4325, l: 4318, v: 75},
    {o: 4320, c: 4325, h: 4327, l: 4319, v: 90},
    {o: 4325, c: 4322, h: 4326, l: 4320, v: 65},
    {o: 4322, c: 4335, h: 4337, l: 4321, v: 280}, // breakout
    {o: 4335, c: 4322, h: 4338, l: 4320, v: 395}, // fakeout wick
    {o: 4322, c: 4310, h: 4323, l: 4308, v: 310},
    {o: 4310, c: 4302, h: 4312, l: 4298, v: 250},
    {o: 4302, c: 4306, h: 4308, l: 4300, v: 115}
  ];

  const ob = [
    {o: 4325, c: 4328, h: 4330, l: 4323, v: 90},
    {o: 4328, c: 4322, h: 4329, l: 4320, v: 105},
    {o: 4322, c: 4314, h: 4323, l: 4312, v: 140}, // Bearish OB
    {o: 4314, c: 4332, h: 4334, l: 4313, v: 380}, // BOS breakout
    {o: 4332, c: 4338, h: 4340, l: 4330, v: 290},
    {o: 4338, c: 4334, h: 4339, l: 4332, v: 150},
    {o: 4334, c: 4326, h: 4335, l: 4325, v: 180},
    {o: 4326, c: 4315, h: 4328, l: 4313, v: 220}, // Mitigation
    {o: 4315, c: 4329, h: 4331, l: 4314, v: 295},
    {o: 4329, c: 4337, h: 4339, l: 4327, v: 215},
    {o: 4337, c: 4345, h: 4348, l: 4335, v: 310}
  ];

  const fvg = [
    {o: 4300, c: 4302, h: 4304, l: 4298, v: 80},
    {o: 4302, c: 4308, h: 4310, l: 4301, v: 140}, // C1
    {o: 4308, c: 4328, h: 4330, l: 4307, v: 480}, // C2
    {o: 4328, c: 4334, h: 4336, l: 4324, v: 250}, // C3
    {o: 4334, c: 4328, h: 4335, l: 4326, v: 130},
    {o: 4328, c: 4318, h: 4329, l: 4316, v: 190}, // Mitigates FVG
    {o: 4318, c: 4332, h: 4335, l: 4317, v: 315},
    {o: 4332, c: 4339, h: 4341, l: 4330, v: 230}
  ];

  // Select appropriate dataset and boundaries for dayNum
  let candles = range;
  if ([1, 7, 13, 16, 19, 21, 22, 34].includes(dayNum)) {
    candles = uptrend;
    minPrice = 4295; maxPrice = 4355;
    ticker = "XAUUSD,H1";
    timeframe = "Gold Spot vs US Dollar";
    watermarkText = "XAUUSD";
  } else if ([8, 10, 17, 38].includes(dayNum)) {
    candles = downtrend;
    minPrice = 4290; maxPrice = 4355;
    ticker = "GBPUSD,H4";
    timeframe = "Great Britain Pound vs US Dollar";
    watermarkText = "GBPUSD";
  } else if ([4, 32].includes(dayNum)) {
    candles = sslSweep;
    minPrice = 4285; maxPrice = 4350;
    ticker = "EURUSD,M5";
    timeframe = "Euro vs US Dollar";
    watermarkText = "EURUSD";
  } else if (dayNum === 5) {
    candles = squeeze;
    minPrice = 4300; maxPrice = 4370;
    ticker = "XAUUSD,M15";
    timeframe = "Gold Spot";
    watermarkText = "XAUUSD";
  } else if (dayNum === 6) {
    candles = fakeout;
    minPrice = 4295; maxPrice = 4345;
    ticker = "EURUSD,M15";
    timeframe = "Euro Spot";
    watermarkText = "EURUSD";
  } else if ([31, 36].includes(dayNum)) {
    candles = ob;
    minPrice = 4308; maxPrice = 4355;
    ticker = "XAUUSD,M5";
    watermarkText = "XAUUSD";
  } else if (dayNum === 33) {
    candles = fvg;
    minPrice = 4290; maxPrice = 4345;
    ticker = "EURUSD,H1";
    watermarkText = "EURUSD";
  } else {
    candles = range;
    minPrice = 4310; maxPrice = 4335;
    ticker = "EURUSD,M5";
    watermarkText = "EURUSD";
  }

  // Coordinate mapping for MT5 borderless layout
  // Plot extends to 445 on X, and 170 on Y. Ejes are drawn directly on black.
  const getX = (idx) => 25 + (idx * (400 / (candles.length - 1 || 1)));
  const getY = (price) => 155 - ((price - minPrice) / (maxPrice - minPrice || 1)) * 130;

  // 1. Draw MT5 Pure Black Layout and Dotted Grid
  elementsHtml += `
    <!-- MT5 Pure Black Background -->
    <rect width="500" height="220" fill="#000000" rx="0" />
    
    <!-- Axis separation lines -->
    <line x1="445" y1="0" x2="445" y2="170" stroke="#444444" stroke-width="0.8" />
    <line x1="0" y1="170" x2="445" y2="170" stroke="#444444" stroke-width="0.8" />
    <line x1="445" y1="170" x2="500" y2="170" stroke="#444444" stroke-width="0.8" />
    
    <!-- Outer Widget Border -->
    <rect width="500" height="220" fill="none" stroke="#2c2c2c" stroke-width="1.5" rx="4" />
    
    <!-- MT5 Classic Dotted Grid Lines (dasharray 1,3) -->
    <g stroke="#2c2c2c" stroke-dasharray="1,3" stroke-width="0.8">
      <line x1="0" y1="45" x2="445" y2="45" />
      <line x1="0" y1="85" x2="445" y2="85" />
      <line x1="0" y1="125" x2="445" y2="125" />
      
      <line x1="100" y1="0" x2="100" y2="170" />
      <line x1="200" y1="0" x2="200" y2="170" />
      <line x1="300" y1="0" x2="300" y2="170" />
      <line x1="400" y1="0" x2="400" y2="170" />
    </g>

    <!-- Translucent background watermark (MT5 symbol) -->
    <text x="222" y="95" fill="rgba(255, 255, 255, 0.015)" font-size="36" font-family="Tahoma" font-weight="bold" text-anchor="middle" letter-spacing="4">${watermarkText}</text>
  `;

  // Draw header unless special screen
  const hasHeader = ![3, 7, 8, 10, 11, 12, 13, 14, 15, 22, 23, 24, 25, 26, 27, 28, 29, 30, 38, 40].includes(dayNum);
  if (hasHeader) {
    elementsHtml += `
      <!-- MT5 Ticker Label (Tahoma font, top left) -->
      <text x="12" y="16" fill="#ffffff" font-size="8.5" font-family="Tahoma" font-weight="bold">${ticker}</text>
      <text x="75" y="16" fill="#a0a0a0" font-size="7.5" font-family="Tahoma">${timeframe}</text>
    `;
  }

  // Helper: Draw MT5 deal execution arrows (Blue buy arrow, Red sell arrow)
  const drawExecutionMT5 = (entryIdx, entryPrice, exitIdx, exitPrice, isLong) => {
    const x1 = getX(entryIdx);
    const x2 = getX(exitIdx);
    const y1 = getY(entryPrice);
    const y2 = getY(exitPrice);
    const buyColor = "#0055ff"; // MT5 Buy Blue
    const sellColor = "#ff3333"; // MT5 Sell Red
    
    let buyY = y1 + 8;
    let sellY = y2 - 8;
    
    if (isLong) {
      return `
        <!-- Entry Buy Arrow -->
        <polygon points="${x1},${buyY} ${x1-4},${buyY+6} ${x1+4},${buyY+6}" fill="${buyColor}" />
        <text x="${x1}" y="${buyY + 13}" fill="${buyColor}" font-size="6" font-family="Tahoma" font-weight="bold" text-anchor="middle">Buy @ ${entryPrice.toFixed(2)}</text>
        
        <!-- Exit Sell Arrow -->
        <polygon points="${x2},${sellY} ${x2-4},${sellY-6} ${x2+4},${sellY-6}" fill="${sellColor}" />
        <text x="${x2}" y="${sellY - 9}" fill="${sellColor}" font-size="6" font-family="Tahoma" font-weight="bold" text-anchor="middle">Sell @ ${exitPrice.toFixed(2)}</text>
        
        <!-- Connection Line -->
        <line x1="${x1}" y1="${buyY + 3}" x2="${x2}" y2="${sellY - 3}" stroke="${buyColor}" stroke-dasharray="1,2" stroke-width="1" opacity="0.75" />
      `;
    } else {
      return `
        <!-- Entry Sell (Short) Arrow -->
        <polygon points="${x1},${sellY} ${x1-4},${sellY-6} ${x1+4},${sellY-6}" fill="${sellColor}" />
        <text x="${x1}" y="${sellY - 9}" fill="${sellColor}" font-size="6" font-family="Tahoma" font-weight="bold" text-anchor="middle">Short @ ${entryPrice.toFixed(2)}</text>
        
        <!-- Exit Buy (Cover) Arrow -->
        <polygon points="${x2},${buyY} ${x2-4},${buyY+6} ${x2+4},${buyY+6}" fill="${buyColor}" />
        <text x="${x2}" y="${buyY + 13}" fill="${buyColor}" font-size="6" font-family="Tahoma" font-weight="bold" text-anchor="middle">Cover @ ${exitPrice.toFixed(2)}</text>
        
        <!-- Connection Line -->
        <line x1="${x1}" y1="${sellY - 3}" x2="${x2}" y2="${buyY + 3}" stroke="${sellColor}" stroke-dasharray="1,2" stroke-width="1" opacity="0.75" />
      `;
    }
  };

  // Helper: Draw MT5 price tracker line and label tag on Y-Axis
  const drawCurrentPriceMT5 = (candles) => {
    const lastC = candles[candles.length - 1].c;
    const y = getY(lastC);
    const isUp = lastC >= candles[candles.length - 2].c;
    const color = isUp ? '#00ff00' : '#ff0000';
    return `
      <!-- Price line -->
      <line x1="0" y1="${y}" x2="445" y2="${y}" stroke="${color}" stroke-dasharray="3,3" stroke-width="1" opacity="0.8" />
      
      <!-- Right Y-Axis Tag -->
      <g transform="translate(445, ${y - 5.5})">
        <rect x="0" y="0" width="50" height="11" fill="#000000" stroke="${color}" stroke-width="0.8" />
        <text x="25" y="8.5" fill="${color}" font-size="7.5" font-family="monospace" text-anchor="middle" font-weight="bold">${lastC.toFixed(2)}</text>
      </g>
    `;
  };

  // 2. Draw candles and volumes (if not special vector screen)
  const isSpecialMT5 = [3, 7, 8, 10, 11, 12, 13, 14, 15, 23, 24, 25, 26, 27, 28, 29, 30, 38, 40].includes(dayNum);
  if (!isSpecialMT5) {
    const maxVol = Math.max(...candles.map(c => c.v));
    
    candles.forEach((c, i) => {
      const x = getX(i);
      const yOpen = getY(c.o);
      const yClose = getY(c.c);
      const yHigh = getY(c.h);
      const yLow = getY(c.l);
      const isBull = c.c >= c.o;
      // MT5 crisp outlines and filled bodies
      const strokeColor = isBull ? '#00ff00' : '#ff0000';
      const fillColor = isBull ? '#00ff00' : '#ff0000';

      // Wick
      elementsHtml += `<line x1="${x}" y1="${yHigh}" x2="${x}" y2="${yLow}" stroke="${strokeColor}" stroke-width="1" />`;
      // Body
      elementsHtml += `<rect x="${x - 4}" y="${Math.min(yOpen, yClose)}" width="8" height="${Math.abs(yOpen - yClose) || 1.2}" fill="${fillColor}" stroke="${strokeColor}" stroke-width="0.5" />`;
      
      // MT5 volume pane overlay
      const volHeight = (c.v / maxVol) * 20;
      elementsHtml += `<rect x="${x - 3}" y="${170 - volHeight}" width="6" height="${volHeight}" fill="${isBull ? 'rgba(0, 255, 0, 0.14)' : 'rgba(255, 0, 0, 0.14)'}" stroke="none" />`;
    });

    // Draw MT Price Axis tick labels directly on black Y-axis
    elementsHtml += `
      <g fill="#c0c0c0" font-size="7.5" font-family="Tahoma" text-anchor="middle">
        <text x="472" y="48">${maxPrice.toFixed(2)}</text>
        <text x="472" y="88">${((maxPrice + minPrice) / 2 + (maxPrice - minPrice) * 0.15).toFixed(2)}</text>
        <text x="472" y="128">${((maxPrice + minPrice) / 2 - (maxPrice - minPrice) * 0.15).toFixed(2)}</text>
        <text x="472" y="162">${minPrice.toFixed(2)}</text>
      </g>
      
      <!-- Time axis X ticks -->
      <g fill="#c0c0c0" font-size="7.5" font-family="Tahoma" text-anchor="middle">
        <text x="100" y="184">${timeLabels[0]}</text>
        <text x="200" y="184">${timeLabels[1]}</text>
        <text x="300" y="184">${timeLabels[2]}</text>
        <text x="400" y="184">${timeLabels[3]}</text>
      </g>
    `;
  }

  // Switch-case for day-specific decorations & MT5 labels
  switch (dayNum) {
    case 1:
      title = "El Precio Objetivamente";
      // Draw MT5 Indicator: Moving Average 50 (Blue line)
      let emaPts = [];
      let lastVal = candles[0].c;
      for(let i=0; i<candles.length; i++) {
        lastVal = candles[i].c * 0.3 + lastVal * 0.7;
        emaPts.push(`${getX(i)},${getY(lastVal)}`);
      }
      elementsHtml += `<path d="M ${emaPts.join(' L ')}" fill="none" stroke="#0055ff" stroke-width="1.2" opacity="0.9" />`;
      elementsHtml += `<text x="100" y="${getY(lastVal) - 15}" fill="#0055ff" font-size="7" font-family="Tahoma">MA(50)</text>`;

      // Dashed price tracking line with MT5 Price Marker tag
      const lastC = candles[candles.length - 1].c;
      const lastY = getY(lastC);
      elementsHtml += `
        <line x1="0" y1="${lastY}" x2="445" y2="${lastY}" stroke="#00ff00" stroke-dasharray="3,3" stroke-width="1" />
        
        <!-- MT5 Text Annotation -->
        <rect x="230" y="95" width="120" height="26" fill="#000000" stroke="#0055ff" stroke-width="0.8" />
        <text x="290" y="106" fill="#f3f4f6" font-size="7.5" font-family="Tahoma" font-weight="bold" text-anchor="middle">PRECIO ACTUAL: LA ÚNICA</text>
        <text x="290" y="117" fill="#0055ff" font-size="7.5" font-family="Tahoma" font-weight="bold" text-anchor="middle">VERDAD OBJETIVA</text>
      `;
      break;

    case 2:
      title = "Pánico y FOMO en el Gráfico";
      const fX = getX(6);
      const fY = getY(4335);
      const pX = getX(9);
      const pY = getY(4302);

      elementsHtml += `
        <!-- Highlighting FOMO peak MT5 style -->
        <circle cx="${fX}" cy="${fY}" r="8" fill="none" stroke="#ff0000" stroke-width="1" />
        <path d="M ${fX - 25},${fY - 20} L ${fX},${fY}" stroke="#ff0000" stroke-width="0.8" />
        <rect x="${fX - 85}" y="${fY - 32}" width="70" height="15" fill="#000000" stroke="#ff0000" stroke-width="0.8" />
        <text x="${fX - 50}" y="${fY - 22}" fill="#ff0000" font-size="7" font-weight="bold" font-family="Tahoma" text-anchor="middle">FOMO (Comprar Techo)</text>

        <!-- Highlighting Panic bottom -->
        <circle cx="${pX}" cy="${pY}" r="8" fill="none" stroke="#ff0000" stroke-width="1" />
        <path d="M ${pX + 25},${pY + 20} L ${pX},${pY}" stroke="#ff0000" stroke-width="0.8" />
        <rect x="${pX + 5}" y="${pY + 15}" width="80" height="15" fill="#000000" stroke="#ff0000" stroke-width="0.8" />
        <text x="${pX + 45}" y="${pY + 25}" fill="#ff0000" font-size="7" font-weight="bold" font-family="Tahoma" text-anchor="middle">PÁNICO (Vender Suelo)</text>
      `;
      break;

    case 3:
      title = "Distribución Aleatoria de Resultados";
      const outs = ['W', 'L', 'L', 'W', 'W', 'L', 'W', 'L', 'W', 'W'];
      outs.forEach((t, i) => {
        const x = 50 + i * 40;
        const color = t === 'W' ? '#00ff00' : '#ff0000';
        elementsHtml += `
          <rect x="${x}" y="85" width="28" height="28" fill="#111111" stroke="${color}" stroke-width="1.5" />
          <text x="${x + 14}" y="103" fill="${color}" font-size="12" font-family="Tahoma" text-anchor="middle" font-weight="bold">${t}</text>
        `;
      });
      elementsHtml += `
        <text x="250" y="150" fill="#f3f4f6" font-size="11" font-family="Tahoma" text-anchor="middle" font-weight="bold">60% de Probabilidad a Largo Plazo</text>
        <text x="250" y="168" fill="#a0a0a0" font-size="8.5" font-family="Tahoma" text-anchor="middle">Cualquier operación individual tiene resultado aleatorio</text>
      `;
      break;

    case 4:
      title = "SSL Sweep (Caza de Stops)";
      const supY = getY(4312);
      elementsHtml += `
        <!-- Horizontal Support Line -->
        <line x1="0" y1="${supY}" x2="445" y2="${supY}" stroke="#ff0000" stroke-width="1" stroke-dasharray="3,3" />
        <text x="12" y="${supY - 6}" fill="#ff0000" font-size="8.5" font-family="Tahoma">Soporte Obvio (Sell Stops acumulados)</text>
        
        <!-- Execution entry Buy arrow -->
        ${drawExecutionMT5(7, 4312, 11, 4335, true)}
      `;
      break;

    case 5:
      title = "Cascada de Compras Forzadas (Squeeze)";
      const resY = getY(4316);
      elementsHtml += `
        <!-- Resistance Line -->
        <line x1="0" y1="${resY}" x2="445" y2="${resY}" stroke="#ff0000" stroke-width="1" stroke-dasharray="3,3" />
        <text x="12" y="${resY - 6}" fill="#ff0000" font-size="8.5" font-family="Tahoma">Resistencia (Buy Stops Vendedores)</text>
        
        <!-- Short Cover Entry Buy arrow -->
        ${drawExecutionMT5(6, 4316, 9, 4350, true)}
      `;
      break;

    case 6:
      title = "Rechazo de Falso Rompimiento (Fakeout)";
      const fkResY = getY(4325);
      const fkWickX = getX(7);
      const fkWickY = getY(4338);

      elementsHtml += `
        <line x1="0" y1="${fkResY}" x2="445" y2="${fkResY}" stroke="#ffffff" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.4" />
        <text x="12" y="${fkResY - 6}" fill="#a0a0a0" font-size="8" font-family="Tahoma">Línea de Resistencia</text>
        
        <circle cx="${fkWickX}" cy="${fkWickY}" r="7" fill="none" stroke="#ff0000" stroke-width="1" />
        <text x="${fkWickX + 15}" y="${fkWickY + 3}" fill="#ff0000" font-size="7.5" font-family="Tahoma" font-weight="bold">Fakeout (Ruptura Falsa)</text>
      `;
      break;

    case 7:
      title = "El Escudo Mental Estoico";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#000000" stroke="#333333" stroke-width="1.5" />
        <path d="M 250,55 C 275,55 295,65 295,95 C 295,130 250,155 250,155 C 250,155 205,130 205,95 C 205,65 225,55 250,55 Z" fill="rgba(0, 85, 255, 0.04)" stroke="#0055ff" stroke-width="2.5" />
        <path d="M 250,68 L 250,135 M 225,90 L 275,90" stroke="#0055ff" stroke-width="2.5" />
        <text x="250" y="42" fill="#f3f4f6" font-size="11.5" font-family="Tahoma" font-weight="bold" text-anchor="middle">CONTROL ESTOICO - METATRADER 5</text>
        <text x="140" y="95" fill="#ff0000" font-size="9" font-family="Tahoma" text-anchor="end" font-weight="bold">FOMO / PÁNICO</text>
        <text x="360" y="95" fill="#00ff00" font-size="9" font-family="Tahoma" text-anchor="start" font-weight="bold">DISCIPLINA OPERATIVA</text>
      `;
      break;

    case 8:
      title = "Preservación del Capital de Trabajo";
      let sfPoints = [];
      let rnPoints = [];
      let sfVal = 10000;
      let rnVal = 10000;
      for(let i=0; i<12; i++) {
        let x = 60 + i * 32;
        sfVal = sfVal - 100;
        rnVal = rnVal - (rnVal * 0.10);
        sfPoints.push(`${x},${160 - (sfVal / 10000) * 110}`);
        rnPoints.push(`${x},${160 - (rnVal / 10000) * 110}`);
      }

      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#000000" stroke="#333333" stroke-width="1.5" />
        <line x1="50" y1="160" x2="450" y2="160" stroke="#444444" stroke-width="1" />
        <text x="60" y="46" fill="#a0a0a0" font-size="8" font-family="Tahoma">MetaTrader Equity Curve - $10,000</text>
        
        <path d="M 60,50 L ${sfPoints.join(' L ')}" fill="none" stroke="#00ff00" stroke-width="2" />
        <path d="M 60,50 L ${rnPoints.join(' L ')}" fill="none" stroke="#ff0000" stroke-width="2" />
        
        <text x="250" y="152" fill="#a0a0a0" font-size="8" font-family="Tahoma" text-anchor="middle">Rachas perdedoras: Riesgo 1% vs Riesgo 10% (Ruina)</text>
      `;
      break;

    case 9:
      title = "Relación Riesgo Beneficio (R:R)";
      const eY = getY(4320);
      const sY = getY(4310);
      const tY = getY(4340);
      const bx = getX(6);

      elementsHtml += `
        <!-- Entry line -->
        <line x1="0" y1="${eY}" x2="445" y2="${eY}" stroke="#0055ff" stroke-width="1" stroke-dasharray="2,2" />
        <text x="12" y="${eY - 4}" fill="#0055ff" font-size="8.5" font-family="Tahoma" font-weight="bold">Entry price level: 4320.00</text>
        
        <!-- TP Box (MT5 green) -->
        <rect x="${bx}" y="${tY}" width="200" height="${eY - tY}" fill="rgba(0, 255, 0, 0.05)" stroke="#00ff00" stroke-width="0.8" />
        <text x="${bx + 10}" y="${(eY + tY)/2 + 4}" fill="#00ff00" font-size="9" font-weight="bold" font-family="Tahoma">TAKE PROFIT (R:R 1:2) +$200</text>
        
        <!-- SL Box (MT5 red) -->
        <rect x="${bx}" y="${eY}" width="200" height="${sY - eY}" fill="rgba(255, 0, 0, 0.05)" stroke="#ff0000" stroke-width="0.8" />
        <text x="${bx + 10}" y="${(eY + sY)/2 + 4}" fill="#ff0000" font-size="9" font-weight="bold" font-family="Tahoma">STOP LOSS (Riesgo 1%) -$100</text>
      `;
      break;

    case 10:
      title = "Daily Drawdown Cut-off";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#000000" stroke="#ff0000" stroke-width="1.5" rx="2" />
        <circle cx="250" cy="80" r="28" fill="rgba(255, 0, 0, 0.05)" stroke="#ff0000" stroke-width="2" />
        <line x1="250" y1="65" x2="250" y2="85" stroke="#ff0000" stroke-width="4.5" stroke-linecap="round" />
        <circle cx="250" cy="95" r="2" fill="#ff0000" />
        
        <text x="250" y="130" fill="#ff0000" font-size="12" font-family="Tahoma" font-weight="bold" text-anchor="middle">LÍMITE DE DRAWDOWN DIARIO (2%) ALCANZADO</text>
        <text x="250" y="148" fill="#f3f4f6" font-size="10" font-family="Tahoma" text-anchor="middle" font-weight="bold">PLATAFORMA BLOQUEADA AUTOMÁTICAMENTE</text>
      `;
      break;

    case 11:
      title = "El Diario de Operaciones del Profesional";
      elementsHtml += `
        <rect x="35" y="30" width="430" height="150" fill="#000000" stroke="#333333" rx="0"/>
        <rect x="35" y="30" width="430" height="25" fill="#111111" rx="0"/>
        
        <!-- Table columns -->
        <text x="45" y="46" fill="#a0a0a0" font-size="7.5" font-family="Tahoma" font-weight="bold">ID</text>
        <text x="80" y="46" fill="#a0a0a0" font-size="7.5" font-family="Tahoma" font-weight="bold">FECHA</text>
        <text x="140" y="46" fill="#a0a0a0" font-size="7.5" font-family="Tahoma" font-weight="bold">ACTIVO</text>
        <text x="200" y="46" fill="#a0a0a0" font-size="7.5" font-family="Tahoma" font-weight="bold">DIRECCIÓN</text>
        <text x="270" y="46" fill="#a0a0a0" font-size="7.5" font-family="Tahoma" font-weight="bold">RIESGO</text>
        <text x="330" y="46" fill="#a0a0a0" font-size="7.5" font-family="Tahoma" font-weight="bold">R:R</text>
        <text x="380" y="46" fill="#a0a0a0" font-size="7.5" font-family="Tahoma" font-weight="bold">P&L NETO</text>
        
        <line x1="35" y1="55" x2="465" y2="55" stroke="#333333" />

        <!-- Row 1 -->
        <text x="45" y="75" fill="#f3f4f6" font-size="7.5" font-family="Tahoma">#28</text>
        <text x="80" y="75" fill="#f3f4f6" font-size="7.5" font-family="Tahoma">30 May 09:35</text>
        <text x="140" y="75" fill="#f3f4f6" font-size="7.5" font-family="Tahoma">EURUSD Spot</text>
        <text x="200" y="75" fill="#00ff00" font-size="7.5" font-family="Tahoma" font-weight="bold">LARGO (BUY)</text>
        <text x="270" y="75" fill="#f3f4f6" font-size="7.5" font-family="Tahoma">$100 (1%)</text>
        <text x="330" y="75" fill="#f3f4f6" font-size="7.5" font-family="Tahoma">1:2</text>
        <text x="380" y="75" fill="#00ff00" font-size="7.5" font-family="Tahoma" font-weight="bold">+$200.00</text>
        <line x1="35" y1="88" x2="465" y2="88" stroke="#333333" />

        <!-- Row 2 -->
        <text x="45" y="108" fill="#f3f4f6" font-size="7.5" font-family="Tahoma">#27</text>
        <text x="80" y="108" fill="#f3f4f6" font-size="7.5" font-family="Tahoma">29 May 10:12</text>
        <text x="140" y="108" fill="#f3f4f6" font-size="7.5" font-family="Tahoma">GBPUSD Spot</text>
        <text x="200" y="108" fill="#ff0000" font-size="7.5" font-family="Tahoma" font-weight="bold">CORTO (SELL)</text>
        <text x="270" y="108" fill="#f3f4f6" font-size="7.5" font-family="Tahoma">$100 (1%)</text>
        <text x="330" y="108" fill="#f3f4f6" font-size="7.5" font-family="Tahoma">1:2</text>
        <text x="380" y="108" fill="#ff0000" font-size="7.5" font-family="Tahoma" font-weight="bold">-$100.00</text>
      `;
      break;

    case 12:
      title = "Proceso Operativo Real";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#000000" stroke="#333333" rx="2" />
        <text x="250" y="55" fill="#f3f4f6" font-size="11" font-weight="bold" font-family="Tahoma" text-anchor="middle">MetaTrader 5 Trade Report - Forex</text>
        
        <g fill="#a0a0a0" font-size="8.5" font-family="Tahoma" transform="translate(80, 80)">
          <text x="0" y="0">P&L Bruto en Pantalla:</text>
          <text x="240" y="0" fill="#00ff00" font-weight="bold" text-anchor="end">+$250.00 USD</text>
          
          <text x="0" y="20">Slippage (Deslizamiento de Orden):</text>
          <text x="240" y="20" fill="#f59e0b" font-weight="bold" text-anchor="end">-$20.00 USD</text>

          <text x="0" y="40">Comisiones de Brokerage (MT5):</text>
          <text x="240" y="40" fill="#ff0000" font-weight="bold" text-anchor="end">-$5.00 USD</text>
        </g>
        
        <line x1="80" y1="140" x2="320" y2="140" stroke="#333333" />
        <text x="80" y="160" fill="#f3f4f6" font-size="11" font-weight="bold" font-family="Tahoma">BENEFICIO NETO REAL EN CUENTA:</text>
        <text x="320" y="160" fill="#00ff00" font-size="12" font-weight="bold" font-family="Tahoma" text-anchor="end">+$225.00 USD</text>
      `;
      break;

    case 13:
      title = "El Método Repetible de la Esperanza";
      elementsHtml += `
        <g font-family="Tahoma" font-weight="bold" font-size="9.5" text-anchor="middle">
          <rect x="40" y="80" width="80" height="35" fill="#111111" stroke="#333333" rx="2" />
          <text x="80" y="101" fill="#f3f4f6">1. Setup Fijo</text>
          
          <rect x="150" y="80" width="90" height="35" fill="rgba(0, 85, 255, 0.08)" stroke="#0055ff" rx="2" />
          <text x="195" y="101" fill="#0055ff">2. Ejecución Fija</text>
          
          <rect x="270" y="80" width="85" height="35" fill="#111111" stroke="#333333" rx="2" />
          <text x="312.5" y="101" fill="#f3f4f6">3. Muestra 100</text>
          
          <rect x="380" y="80" width="80" height="35" fill="rgba(0, 255, 0, 0.08)" stroke="#00ff00" rx="2" />
          <text x="420" y="101" fill="#00ff00">4. Esperanza</text>
        </g>
      `;
      elementsHtml += arrow(120, 97, 150, 97, '#0055ff');
      elementsHtml += arrow(240, 97, 270, 97, '#0055ff');
      elementsHtml += arrow(355, 97, 380, 97, '#00ff00');
      elementsHtml += `
        <text x="250" y="155" fill="#a0a0a0" font-size="8.5" font-family="Tahoma" text-anchor="middle">Consistencia es repetir el mismo proceso bajo un R:R asimétrico</text>
      `;
      break;

    case 14:
      title = "Ajuste de Lotes según Distancia de Stop Loss";
      elementsHtml += `
        <rect x="40" y="30" width="420" height="150" fill="#000000" stroke="#333333" rx="2" />
        
        <rect x="60" y="50" width="150" height="60" fill="rgba(0, 255, 0, 0.05)" stroke="#00ff00" stroke-width="1" rx="2" />
        <text x="135" y="70" fill="#f3f4f6" font-size="9" font-family="Tahoma" font-weight="bold" text-anchor="middle">Stop Loss Estrecho (10 pts)</text>
        <text x="135" y="88" fill="#00ff00" font-size="11" font-family="Tahoma" font-weight="bold" text-anchor="middle">2 Contratos MES</text>
        
        <rect x="290" y="50" width="150" height="60" fill="rgba(255, 0, 0, 0.05)" stroke="#ff0000" stroke-width="1" rx="2" />
        <text x="365" y="70" fill="#f3f4f6" font-size="9" font-family="Tahoma" font-weight="bold" text-anchor="middle">Stop Loss Amplio (20 pts)</text>
        <text x="365" y="88" fill="#ff0000" font-size="11" font-family="Tahoma" font-weight="bold" text-anchor="middle">1 Contrato MES</text>

        <path d="M 220,80 L 280,80" stroke="#f59e0b" stroke-dasharray="2,2" stroke-width="1.2" marker-end="url(#arr-14)" />
        <text x="250" y="72" fill="#f59e0b" font-size="7.5" font-family="Tahoma" font-weight="bold" text-anchor="middle">Distancia x2</text>
        <text x="250" y="94" fill="#f59e0b" font-size="7.5" font-family="Tahoma" font-weight="bold" text-anchor="middle">Contratos /2</text>
        
        <text x="250" y="155" fill="#f3f4f6" font-size="9.5" font-family="Tahoma" font-weight="bold" text-anchor="middle">Riesgo monetario idéntico ($100.00 USD)</text>
      `;
      break;

    case 15:
      title = "Ancla Metodológica Contra el Ruido";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#000000" stroke="#f59e0b" stroke-width="1.5" rx="2" />
        <path d="M 250,55 L 250,140 M 210,75 L 290,75 M 190,110 C 190,165 310,165 310,110 M 175,100 L 192,110 M 325,100 L 308,110" fill="none" stroke="#f59e0b" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="250" cy="55" r="10" stroke="#f59e0b" stroke-width="3" fill="none" />
        
        <text x="250" y="42" fill="#f3f4f6" font-size="11.5" font-family="Tahoma" font-weight="bold" text-anchor="middle">ANCLA DE GESTIÓN DE RIESGO MT5</text>
      `;
      break;

    case 16:
      title = "Tendencia Saludable (Estructura)";
      const hl1 = [getX(0), getY(4302)];
      const hh1 = [getX(4), getY(4320)];
      const hl2 = [getX(5), getY(4315)];
      const hh2 = [getX(8), getY(4334)];
      const hl3 = [getX(9), getY(4328)];
      const hh3 = [getX(12), getY(4347)];

      elementsHtml += `
        <path d="M ${hl1.join(',')} L ${hh1.join(',')} L ${hl2.join(',')} L ${hh2.join(',')} L ${hl3.join(',')} L ${hh3.join(',')}" fill="none" stroke="#0055ff" stroke-width="2" stroke-dasharray="2,2" opacity="0.8" />
        
        <circle cx="${hl1[0]}" cy="${hl1[1]}" r="4" fill="#00ff00" />
        <text x="${hl1[0]}" y="${hl1[1] + 12}" fill="#00ff00" font-size="8" font-family="Tahoma" font-weight="bold" text-anchor="middle">HL</text>

        <circle cx="${hh1[0]}" cy="${hh1[1]}" r="4" fill="#ff0000" />
        <text x="${hh1[0]}" y="${hh1[1] - 8}" fill="#ff0000" font-size="8" font-family="Tahoma" font-weight="bold" text-anchor="middle">HH</text>

        <circle cx="${hl2[0]}" cy="${hl2[1]}" r="4" fill="#00ff00" />
        <text x="${hl2[0]}" y="${hl2[1] + 12}" fill="#00ff00" font-size="8" font-family="Tahoma" font-weight="bold" text-anchor="middle">HL</text>

        <circle cx="${hh2[0]}" cy="${hh2[1]}" r="4" fill="#ff0000" />
        <text x="${hh2[0]}" y="${hh2[1] - 8}" fill="#ff0000" font-size="8" font-family="Tahoma" font-weight="bold" text-anchor="middle">HH</text>

        <circle cx="${hl3[0]}" cy="${hl3[1]}" r="4" fill="#00ff00" />
        <text x="${hl3[0]}" y="${hl3[1] + 12}" fill="#00ff00" font-size="8" font-family="Tahoma" font-weight="bold" text-anchor="middle">HL</text>
      `;
      break;

    case 17:
      title = "Quiebre Estructural Defensivo";
      const pivotY = getY(4335);
      const startX = getX(4);
      const endX = getX(10);
      
      elementsHtml += `
        <line x1="${startX}" y1="${pivotY}" x2="${endX}" y2="${pivotY}" stroke="#ff0000" stroke-width="1.2" stroke-dasharray="3,3" />
        <circle cx="${getX(6)}" cy="${pivotY}" r="4" fill="#ff0000" />
        
        <g transform="translate(${(startX + endX)/2}, ${pivotY - 4})">
          <rect x="-24" y="-4" width="48" height="9" fill="#000000" stroke="#ff0000" stroke-width="0.8" />
          <text x="0" y="3" fill="#ff0000" font-size="6.5" font-family="Tahoma" font-weight="bold" text-anchor="middle">BOS Bajista</text>
        </g>
        
        <text x="${getX(4)}" y="${getY(4335) - 15}" fill="#f3f4f6" font-size="7.5" font-family="Tahoma" text-anchor="middle">Mínimo HL de Defensa</text>
      `;
      break;

    case 18:
      title = "Zonas Clave de Oferta y Demanda";
      elementsHtml += `
        <rect x="0" y="20" width="445" height="35" fill="rgba(255, 0, 0, 0.05)" stroke="#ff0000" stroke-width="0.8" stroke-dasharray="2,2" />
        <text x="12" y="40" fill="#ff0000" font-size="8.5" font-family="Tahoma" font-weight="bold">ZONA DE OFERTA INSTITUCIONAL (Supply Zone)</text>
        
        <rect x="0" y="130" width="445" height="35" fill="rgba(0, 255, 0, 0.05)" stroke="#00ff00" stroke-width="0.8" stroke-dasharray="2,2" />
        <text x="12" y="150" fill="#00ff00" font-size="8.5" font-family="Tahoma" font-weight="bold">ZONA DE DEMANDA INSTITUCIONAL (Demand Zone)</text>
      `;
      break;

    case 19:
      title = "Lectura Limpia de Estructura";
      const engX = getX(6.5);
      const engY = getY(4320);

      elementsHtml += `
        <circle cx="${engX}" cy="${engY}" r="22" fill="none" stroke="#0055ff" stroke-width="1.2" stroke-dasharray="2,2" />
        <text x="${engX}" y="${engY - 26}" fill="#0055ff" font-size="8" font-family="Tahoma" font-weight="bold" text-anchor="middle">Patrón de Engolfing</text>
      `;
      break;

    case 20:
      title = "La Ley de Polaridad S/R";
      const polY = getY(4324);
      elementsHtml += `
        <line x1="0" y1="${polY}" x2="445" y2="${polY}" stroke="#f59e0b" stroke-width="1.5" />
        <text x="12" y="${polY - 5}" fill="#f59e0b" font-size="8" font-family="Tahoma" font-weight="bold">Resistencia Antigua</text>
        <text x="12" y="${polY + 11}" fill="#f59e0b" font-size="8" font-family="Tahoma" font-weight="bold">Soporte Nuevo (Polaridad)</text>

        <!-- Test point highlight -->
        <circle cx="${getX(9)}" cy="${polY}" r="6" fill="none" stroke="#00ff00" stroke-width="2" />
        <path d="M ${getX(9)},${polY + 25} L ${getX(9)},${polY + 8}" stroke="#00ff00" stroke-width="1" marker-end="url(#arr-20)" />
      `;
      break;

    case 21:
      title = "EMA 200 y Momentum RSI";
      // Draw EMA 200 curve on MT5
      let e200Pts = [];
      let cVal = candles[0].c;
      for(let i=0; i<candles.length; i++) {
        cVal = candles[i].c * 0.15 + cVal * 0.85;
        e200Pts.push(`${getX(i)},${getY(cVal)}`);
      }
      elementsHtml += `<path d="M ${e200Pts.join(' L ')}" fill="none" stroke="#f59e0b" stroke-width="1.8" opacity="0.8" />`;
      elementsHtml += `<text x="350" y="${getY(cVal) - 6}" fill="#f59e0b" font-size="7.5" font-family="Tahoma">EMA (200)</text>`;

      // Draw RSI sub-pane
      elementsHtml += `
        <rect x="0" y="170" width="445" height="50" fill="#000000" stroke="#333333" stroke-width="0.8" />
        <line x1="0" y1="195" x2="445" y2="195" stroke="rgba(0, 85, 255, 0.4)" stroke-width="0.8" stroke-dasharray="2,2" />
        <text x="10" y="182" fill="#a0a0a0" font-size="7" font-family="Tahoma">RSI 14 (Momentum Index)</text>

        <path d="M 0,210 L 100,205 L 200,197 L 300,188 L 400,182 L 445,180" fill="none" stroke="#0055ff" stroke-width="1.5" />
        
        <circle cx="300" cy="188" r="3" fill="#00ff00" />
      `;
      break;

    case 22:
      title = "Faro de Dirección (Estructura)";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#000000" stroke="#333333" stroke-width="1.5" rx="2" />
        <path d="M 235,160 L 245,65 L 255,65 L 265,160 Z" fill="#111111" stroke="#0055ff" stroke-width="2" />
        <rect x="242" y="52" width="16" height="13" fill="#f59e0b" rx="1" />
        <polygon points="250,58 100,20 100,120" fill="rgba(245, 158, 11, 0.05)" />
        <polygon points="250,58 400,20 400,120" fill="rgba(245, 158, 11, 0.05)" />
        
        <text x="250" y="45" fill="#f3f4f6" font-size="11" font-family="Tahoma" font-weight="bold" text-anchor="middle">ESTRUCTURA DE MERCADO = TU BRÚJULA</text>
      `;
      break;

    case 23:
      title = "Cronograma Diario del Operador";
      elementsHtml += `
        <rect x="40" y="30" width="420" height="150" fill="#000000" stroke="#333333" rx="2" />
        <line x1="60" y1="100" x2="440" y2="100" stroke="#444444" stroke-width="3" />
        
        <circle cx="100" cy="100" r="8" fill="#0055ff" />
        <text x="100" y="85" fill="#f3f4f6" font-size="7.5" font-family="Tahoma" font-weight="bold" text-anchor="middle">08:00 AM</text>
        <text x="100" y="117" fill="#a0a0a0" font-size="8" font-family="Tahoma" text-anchor="middle">Análisis Pre-market</text>

        <circle cx="250" cy="100" r="8" fill="#00ff00" />
        <text x="250" y="85" fill="#f3f4f6" font-size="7.5" font-family="Tahoma" font-weight="bold" text-anchor="middle">09:30 AM</text>
        <text x="250" y="117" fill="#00ff00" font-size="8" font-family="Tahoma" font-weight="bold" text-anchor="middle">Sesión Activa</text>

        <circle cx="400" cy="100" r="8" fill="#f59e0b" />
        <text x="400" y="85" fill="#f3f4f6" font-size="7.5" font-family="Tahoma" font-weight="bold" text-anchor="middle">12:00 PM</text>
        <text x="400" y="117" fill="#a0a0a0" font-size="8" font-family="Tahoma" text-anchor="middle">Bitácora & Cierre</text>
      `;
      break;

    case 24:
      title = "Checklist pre-market Visión Pro";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#000000" stroke="#333333" rx="2" />
        <text x="250" y="48" fill="#f3f4f6" font-size="11" font-family="Tahoma" font-weight="bold" text-anchor="middle">Checklist de Ejecución Pre-market</text>
      `;
      const checklistLines = [
        "1. ¿Tendencia de fondo EMA 200 de 5m confirmada?",
        "2. ¿Ausencia de noticias de impacto de la Fed o IPC?",
        "3. ¿Zona operativa de soporte/demanda (OB) tocada?",
        "4. ¿Tamaño de lote calculado con riesgo de cuenta del 1%?"
      ];
      checklistLines.forEach((str, i) => {
        const y = 68 + i * 26;
        elementsHtml += `
          <rect x="80" y="${y}" width="14" height="14" fill="none" stroke="#00ff00" stroke-width="1.5" rx="2" />
          <polyline points="83 ${y+7}, 86 ${y+10}, 91 ${y+4}" fill="none" stroke="#00ff00" stroke-width="2" />
          <text x="105" y="${y + 11}" fill="#f3f4f6" font-size="9" font-family="Tahoma">${str}</text>
        `;
      });
      break;

    case 25:
      title = "Pulsaciones vs Enfoque Estoico";
      let panPts = [];
      for(let i=0; i<20; i++) {
        let x = 60 + i * 8;
        let y = 110 + Math.sin(i * 1.5) * 35 + (Math.random() * 8);
        panPts.push(`${x},${y}`);
      }
      let cPoints = [];
      for(let i=0; i<20; i++) {
        let x = 270 + i * 8;
        let y = 110 + Math.sin(i * 0.4) * 8;
        cPoints.push(`${x},${y}`);
      }

      elementsHtml += `
        <rect x="40" y="30" width="420" height="150" fill="#000000" stroke="#333333" rx="2" />
        
        <rect x="50" y="50" width="165" height="110" fill="rgba(255,0,0,0.01)" stroke="rgba(255,0,0,0.1)" />
        <path d="M ${panPts.join(' L ')}" fill="none" stroke="#ff0000" stroke-width="1.5" />
        <text x="132.5" y="70" fill="#ff0000" font-size="9" font-family="Tahoma" font-weight="bold" text-anchor="middle">Estrés Emocional (120 BPM)</text>

        <rect x="260" y="50" width="185" height="110" fill="rgba(0,255,0,0.01)" stroke="rgba(0,255,0,0.1)" />
        <path d="M ${cPoints.join(' L ')}" fill="none" stroke="#00ff00" stroke-width="2.2" />
        <text x="352.5" y="70" fill="#00ff00" font-size="9" font-family="Tahoma" font-weight="bold" text-anchor="middle">Control Estoico (65 BPM)</text>
      `;
      break;

    case 26:
      title = "Apagado y Cierre Operativo";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#000000" stroke="#ff0000" stroke-width="1.5" rx="2" />
        <circle cx="250" cy="90" r="30" fill="rgba(255, 0, 0, 0.05)" stroke="#ff0000" stroke-width="3" />
        <line x1="250" y1="72" x2="250" y2="92" stroke="#ff0000" stroke-width="5" stroke-linecap="round" />
        
        <text x="250" y="145" fill="#f3f4f6" font-size="12" font-weight="bold" font-family="Tahoma" text-anchor="middle">SESIÓN TERMINADA - APAGADO</text>
      `;
      break;

    case 27:
      title = "Métricas Reales vs Planificadas";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#000000" stroke="#333333" rx="2" />
        
        <rect x="320" y="48" width="10" height="10" fill="#0055ff" />
        <text x="335" y="56" fill="#a0a0a0" font-size="8" font-family="Tahoma">Objetivo</text>
        <rect x="380" y="48" width="10" height="10" fill="#00ff00" />
        <text x="395" y="56" fill="#a0a0a0" font-size="8" font-family="Tahoma">Logrado</text>

        <rect x="90" y="70" width="20" height="70" fill="#0055ff" />
        <rect x="112" y="80" width="20" height="60" fill="#00ff00" />
        <text x="111" y="152" fill="#f3f4f6" font-size="8" font-family="Tahoma" text-anchor="middle">Acierto (50% vs 43%)</text>

        <rect x="230" y="80" width="20" height="60" fill="#0055ff" />
        <rect x="252" y="60" width="20" height="80" fill="#00ff00" />
        <text x="251" y="152" fill="#f3f4f6" font-size="8" font-family="Tahoma" text-anchor="middle">Ratio R:R (1:2 vs 1:2.4)</text>
      `;
      break;

    case 28:
      title = "Agrupación de Errores Operativos";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#000000" stroke="#333333" rx="2" />
        
        <circle cx="160" cy="105" r="50" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="20" />
        <circle cx="160" cy="105" r="30" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="15" />
        <circle cx="160" cy="105" r="10" fill="#f59e0b" />
        
        <circle cx="150" cy="100" r="4" fill="#0055ff" />
        <circle cx="162" cy="112" r="4" fill="#0055ff" />
        <text x="230" y="85" fill="#0055ff" font-size="9" font-family="Tahoma" font-weight="bold">Errores de Setup (Técnicos)</text>

        <circle cx="130" cy="75" r="4" fill="#ff0000" />
        <circle cx="190" cy="130" r="4" fill="#ff0000" />
        <text x="230" y="125" fill="#ff0000" font-size="9" font-family="Tahoma" font-weight="bold">Errores de Disciplina (FOMO)</text>
      `;
      break;

    case 29:
      title = "Bucle de Mejora Continua Estoica";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#000000" stroke="#333333" rx="2" />
        
        <path d="M 250,55 A 45,45 0 1,1 205,100" fill="none" stroke="#0055ff" stroke-width="3" marker-end="url(#arr-29)" />
        <path d="M 205,100 A 45,45 0 0,1 250,145" fill="none" stroke="#00ff00" stroke-width="3" marker-end="url(#arr-29)" />
        <path d="M 250,145 A 45,45 0 0,1 250,55" fill="none" stroke="#f59e0b" stroke-width="3" marker-end="url(#arr-29)" />
        
        <text x="250" y="80" fill="#0055ff" font-size="8" font-family="Tahoma" font-weight="bold" text-anchor="middle">1. AUDITAR</text>
        <text x="180" y="115" fill="#00ff00" font-size="8" font-family="Tahoma" font-weight="bold" text-anchor="middle">2. MEDIR</text>
        <text x="320" y="115" fill="#f59e0b" font-size="8" font-family="Tahoma" font-weight="bold" text-anchor="middle">3. MEJORAR</text>
      `;
      break;

    case 30:
      title = "Diploma de Maestría en Trading Profesional";
      elementsHtml += `
        <rect x="80" y="30" width="340" height="150" fill="#000000" stroke="#d4af37" stroke-width="3" rx="4" />
        <rect x="88" y="38" width="324" height="134" fill="none" stroke="rgba(212,175,55,0.2)" stroke-width="1.2" />
        
        <text x="250" y="65" fill="#d4af37" font-size="13" font-family="Tahoma" font-weight="bold" text-anchor="middle" letter-spacing="2">METATRADER 5 CERTIFICATION</text>
        <text x="250" y="85" fill="#a0a0a0" font-size="7.5" font-family="Tahoma" text-anchor="middle">OTORGADO POR COMPLETAR EXPOSITIVAMENTE LA MASTERCLASS</text>
        <text x="250" y="110" fill="#f3f4f6" font-size="14" font-family="Tahoma" font-weight="bold" text-anchor="middle">VISIÓN TRADING PRO (40 DÍAS)</text>
        
        <text x="350" y="142" fill="#d4af37" font-size="6.5" font-family="Tahoma" font-weight="bold" text-anchor="middle">Firma: Albert Sierra</text>
      `;
      break;

    case 31:
      title = "Estructura de Order Block (OB)";
      const obH = 4322;
      const obL = 4312;
      
      elementsHtml += `
        <!-- OB Box with MT5 solid dashed green -->
        <rect x="${getX(2)}" y="${getY(obH)}" width="${getX(7) - getX(2)}" height="${getY(obL) - getY(obH)}" fill="rgba(0, 255, 0, 0.05)" stroke="#00ff00" stroke-width="0.8" stroke-dasharray="3,3" />
        <text x="${getX(2) + 5}" y="${getY(obH) + 11}" fill="#00ff00" font-size="7.5" font-family="Tahoma" font-weight="bold">Bullish Order Block (OB)</text>
        
        <!-- BOS Line label -->
        <line x1="${getX(3)}" y1="${getY(4330)}" x2="${getX(6)}" y2="${getY(4330)}" stroke="#0055ff" stroke-dasharray="2,2" stroke-width="1.2" />
        <text x="${getX(4.5)}" y="${getY(4330) - 4}" fill="#0055ff" font-size="7" font-family="Tahoma" font-weight="bold" text-anchor="middle">BOS</text>

        <!-- Execution Buy entry inside the OB mitigation candle -->
        ${drawExecutionMT5(7, 4315, 10, 4345, true)}
      `;
      break;

    case 32:
      title = "Caza de Liquidez y la Ilusión de Soportes/Resistencias";
      const supportY = getY(4314);
      elementsHtml += `
        <!-- Support level line -->
        <line x1="0" y1="${supportY}" x2="445" y2="${supportY}" stroke="#ff0000" stroke-width="1.2" stroke-dasharray="3,3" />
        <text x="12" y="${supportY - 5}" fill="#ff0000" font-size="8.5" font-family="Tahoma">SSL Support Pool (Soporte Minorista)</text>
        
        <!-- MT5 Execution marker at the sweep candle -->
        ${drawExecutionMT5(7, 4314, 11, 4340, true)}
        <text x="${getX(7)}" y="${getY(4292) + 38}" fill="#e91e63" font-size="7.5" font-family="Tahoma" font-weight="bold" text-anchor="middle">SSL Sweep (Caza de Stops)</text>
      `;
      break;

    case 33:
      title = "Desequilibrios Algorítmicos e Ineficiencias (FVG)";
      // FVG is from candle 1 high (4310) to candle 3 low (4324)
      const fvgTop = getY(4324);
      const fvgBot = getY(4310);
      
      elementsHtml += `
        <!-- FVG box -->
        <rect x="${getX(1)}" y="${fvgTop}" width="${getX(3) - getX(1)}" height="${fvgBot - fvgTop}" fill="rgba(245, 158, 11, 0.06)" stroke="#f59e0b" stroke-width="0.8" stroke-dasharray="3,3" />
        <text x="${getX(1) + 5}" y="${fvgTop + 10}" fill="#f59e0b" font-size="7.5" font-family="Tahoma" font-weight="bold">Fair Value Gap (FVG)</text>
        
        <circle cx="${getX(5)}" cy="${getY(4318)}" r="5" fill="none" stroke="#f59e0b" stroke-width="1.5" />
        <text x="${getX(5) + 30}" y="${getY(4318) + 26}" fill="#f59e0b" font-size="7.5" font-family="Tahoma" font-weight="bold">Rebalanceo Parcial</text>
      `;
      break;

    case 34:
      title = "Fractalidad y Alineación Temporal (HTF/LTF)";
      elementsHtml += `
        <!-- Left Panel: HTF Bias -->
        <rect x="25" y="30" width="180" height="130" fill="#000000" stroke="#333333" stroke-width="1" />
        <rect x="25" y="30" width="180" height="15" fill="#111111" stroke="#333333" stroke-width="0.8" />
        <text x="115" y="41" fill="#0055ff" font-size="7.5" font-family="Tahoma" font-weight="bold" text-anchor="middle">HTF BIAS (1 Hora)</text>
        <path d="M 35,140 L 80,110 L 120,120 L 190,60" fill="none" stroke="#0055ff" stroke-width="2" />
        <circle cx="190" cy="60" r="4.5" fill="#f59e0b" />

        <!-- Right Panel: LTF Gatillo -->
        <rect x="240" y="30" width="180" height="130" fill="#000000" stroke="#333333" stroke-width="1" />
        <rect x="240" y="30" width="180" height="15" fill="#111111" stroke="#333333" stroke-width="0.8" />
        <text x="330" y="41" fill="#00ff00" font-size="7.5" font-family="Tahoma" font-weight="bold" text-anchor="middle">LTF GATILLO (1 Minuto)</text>
        <path d="M 250,130 L 275,110 L 290,118 L 320,90 L 335,98 L 380,55" fill="none" stroke="#00ff00" stroke-width="1.5" />
        <circle cx="320" cy="90" r="3.5" fill="#ff0000" />
      `;
      break;

    case 35:
      title = "Zonas Premium y Descuento";
      const midY = getY(4322.5);
      elementsHtml += `
        <!-- Equilibrium line -->
        <line x1="0" y1="${midY}" x2="445" y2="${midY}" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,4" />
        <text x="435" y="${midY - 5}" fill="#f59e0b" font-size="8" font-family="Tahoma" text-anchor="end">Precio de Equilibrio (50%)</text>
        
        <!-- Premium Box (Red) -->
        <rect x="0" y="20" width="445" height="${midY - 20}" fill="rgba(255,0,0,0.03)" stroke="none" />
        <text x="12" y="42" fill="#ff0000" font-size="8.5" font-family="Tahoma" font-weight="bold">ZONA PREMIUM: CARO (Solo Ventas)</text>
        
        <!-- Discount Box (Green) -->
        <rect x="0" y="${midY}" width="445" height="${170 - midY}" fill="rgba(0,255,0,0.03)" stroke="none" />
        <text x="12" y="155" fill="#00ff00" font-size="8.5" font-family="Tahoma" font-weight="bold">ZONA DE DESCUENTO: BARATO (Solo Compras)</text>
      `;
      break;

    case 36:
      title = "El Poder de los Breaker Blocks (OB Roto)";
      const brHigh = 4322;
      const brLow = 4312;
      
      elementsHtml += `
        <!-- Original OB box that was broken -->
        <rect x="${getX(2)}" y="${getY(brHigh)}" width="${getX(7) - getX(2)}" height="${getY(brLow) - getY(brHigh)}" fill="rgba(0, 85, 255, 0.05)" stroke="#0055ff" stroke-width="0.8" stroke-dasharray="3,3" />
        <text x="${getX(2) + 5}" y="${getY(brHigh) + 11}" fill="#0055ff" font-size="7.5" font-family="Tahoma" font-weight="bold">OB Roto</text>
        
        <!-- Retest purchase execution -->
        ${drawExecutionMT5(7, 4315, 10, 4345, true)}
        <text x="${getX(7)}" y="${getY(4315) + 36}" fill="#f59e0b" font-size="8" font-family="Tahoma" font-weight="bold" text-anchor="middle">Test Breaker (Compra)</text>
      `;
      break;

    case 37:
      title = "Subasta de Volumen: POC y Zonas de Alta Liquidez";
      // Draw horizontal Volume Profile histogram on right side
      const drawHBar = (y, w, isPOC) => {
        const color = isPOC ? '#ff0000' : '#0055ff';
        return `
          <rect x="${445 - w}" y="${y}" width="${w}" height="8" fill="${color}" fill-opacity="${isPOC ? 0.35 : 0.12}" stroke="${color}" stroke-opacity="0.3" stroke-width="0.5" rx="1" />
        `;
      };
      
      elementsHtml += `
        <!-- Profile bars -->
        ${drawHBar(35, 45, false)}
        ${drawHBar(50, 60, false)}
        ${drawHBar(65, 85, false)}
        ${drawHBar(80, 110, false)}
        ${drawHBar(95, 175, true)} // POC peak
        ${drawHBar(110, 130, false)}
        ${drawHBar(125, 95, false)}
        ${drawHBar(140, 55, false)}
        ${drawHBar(155, 30, false)}

        <!-- POC horizontal line -->
        <line x1="0" y1="99" x2="445" y2="99" stroke="#ff0000" stroke-width="1.5" />
        <rect x="250" y="85" width="130" height="12" fill="#000000" rx="0" stroke="#ff0000" stroke-width="0.8" />
        <text x="315" y="94" fill="#ff0000" font-size="7.5" font-family="Tahoma" font-weight="bold" text-anchor="middle">POC (Punto de Control Máximo)</text>
      `;
      break;

    case 38:
      title = "Reglas de Fondeo y Control de drawdown Institucional";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#000000" stroke="#333333" rx="2" />
        <text x="250" y="55" fill="#f3f4f6" font-size="11" font-family="Tahoma" font-weight="bold" text-anchor="middle">MetaTrader Prop Account Limit Check</text>
        
        <g font-family="Tahoma" font-size="9" fill="#a0a0a0">
          <text x="80" y="90">LÍMITE DIARIO (Drawdown):</text>
          <text x="330" y="90" fill="#ff0000" font-weight="bold" text-anchor="end">-$1,000.00 USD (2.0%)</text>

          <text x="80" y="115">LÍMITE TOTAL (Drawdown):</text>
          <text x="330" y="115" fill="#ff0000" font-weight="bold" text-anchor="end">-$2,500.00 USD (5.0%)</text>

          <text x="80" y="140">OBJETIVO DE BENEFICIO:</text>
          <text x="330" y="140" fill="#00ff00" font-weight="bold" text-anchor="end">+$3,000.00 USD (6.0%)</text>
        </g>
      `;
      break;

    case 39:
      title = "Gestión Activa de Posición: Tomar Parciales y Riesgo Cero";
      const stopP = 4310;
      const t1Y = getY(4330);
      
      elementsHtml += `
        <!-- Entry line -->
        <line x1="0" y1="${getY(entryP)}" x2="445" y2="${getY(entryP)}" stroke="#0055ff" stroke-width="1.2" />
        <text x="12" y="${getY(entryP) - 4}" fill="#0055ff" font-size="7.5" font-family="Tahoma">Entrada (2 Contratos)</text>

        <!-- SL line original -->
        <line x1="0" y1="${getY(stopP)}" x2="445" y2="${getY(stopP)}" stroke="#ff0000" stroke-dasharray="2,2" stroke-width="1" opacity="0.4" />
        <text x="12" y="${getY(stopP) + 10}" fill="#ff0000" font-size="7.5" font-family="Tahoma" opacity="0.5">SL Original (-$100)</text>

        <!-- 1:1 Target met -->
        <line x1="0" y1="${t1Y}" x2="445" y2="${t1Y}" stroke="#00ff00" stroke-width="1" stroke-dasharray="2,2" />
        <text x="12" y="${t1Y - 4}" fill="#00ff00" font-size="7.5" font-family="Tahoma">R:R 1:1 Met (Cierra 1 Contrato +$50)</text>

        <!-- SL moved to breakeven -->
        ${drawExecutionMT5(9, 4320, 12, 4345, true)}
        <text x="${getX(9) + 8}" y="${getY(entryP) + 26}" fill="#00ff00" font-size="7.5" font-family="Tahoma" font-weight="bold">SL Movido a Entrada (Riesgo Cero)</text>
      `;
      break;

    case 40:
      title = "El Checklist Institucional de Albert Sierra";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#000000" stroke="#d4af37" stroke-width="1.5" rx="2" />
        <text x="250" y="48" fill="#d4af37" font-size="11" font-family="Tahoma" font-weight="bold" text-anchor="middle">Checklist Institucional - MetaTrader 5</text>
      `;
      const finalChecklist = [
        "1. Contexto HTF: ¿Precio mitigando OB o FVG mayor?",
        "2. Sweep de Liquidez: ¿Barrido previo de SSL/BSL?",
        "3. Estructura LTF: ¿Quiebre de estructura BOS en 1m?",
        "4. Zona Operativa: ¿Operamos en Descuento (largos) o Premium?"
      ];
      finalChecklist.forEach((str, i) => {
        const y = 65 + i * 26;
        elementsHtml += `
          <circle cx="75" cy="${y}" r="8" fill="rgba(212,175,55,0.1)" stroke="#d4af37" stroke-width="1.5" />
          <polyline points="72 ${y}, 74 ${y+3}, 78 ${y-3}" fill="none" stroke="#d4af37" stroke-width="2" />
          <text x="95" y="${y + 3}" fill="#f3f4f6" font-size="9" font-family="Tahoma" font-weight="bold">${str}</text>
        `;
      });
      break;

    default:
      return "";
  }

  // Draw Price tracker for MT5 if plotting candles
  if (!isSpecialMT5) {
    elementsHtml += drawCurrentPriceMT5(candles);
  }

  return `
    <div class="lesson-chart">
      <svg viewBox="0 0 ${width} ${height}" width="100%" height="${height}" xmlns="http://www.w3.org/2000/svg">
        ${elementsHtml}
      </svg>
      <div class="lesson-chart-title">
        <i data-lucide="bar-chart-2" style="width: 14px; height: 14px; color: var(--color-accent);"></i>
        <span>Gráfico de Apoyo (MetaTrader 5): ${title}</span>
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
