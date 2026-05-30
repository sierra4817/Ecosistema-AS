// Dynamic Course Manager - Visión Trading Pro (42-Day Intensive)

// 42 Days Syllabus Data
const courseData = {
  day1: {
    id: "day1",
    pilar: 1,
    title: "El Precio es la Única Realidad",
    unlocked: true,
    completed: false,
    challenge: "Identifica y documenta un sesgo de falsas expectativas que hayas tenido en tu operativa reciente o en tu fase de aprendizaje.",
    content: `
      <p>Comenzamos el <strong>Módulo 1: Mentalidad Ganadora</strong>. Como trader pragmático, debes grabar en tu mente esta ley fundamental: <strong>el precio es la única realidad objetiva del mercado</strong>. El mercado es un mecanismo de subasta doble continua diseñado para emparejar compradores y vendedores. No sabe quién eres, cuánto dinero necesitas para pagar tus facturas, ni qué opinas sobre la economía global.</p>
      <h3>Desmitificando Sesgos y Proyecciones Subjetivas</h3>
      <p>El principal error del operador novato es proyectar deseos y opiniones subjetivas sobre el gráfico. Creer que el precio \"debe\" subir porque ha bajado mucho, o que una noticia económica \"debe\" impulsar la cotización, es una fantasía destructiva. El precio de cotización en cada segundo es el único consenso de valor real en ese instante.</p>
      <ul>
        <li><strong>Aceptación Objetiva del Precio:</strong> Si tu análisis indicaba compras pero el precio cruza tu stop loss a la baja, el mercado no está equivocado; tu hipótesis lo estaba. Acepta el precio tal como es, de forma neutral.</li>
        <li><strong>Desapego y Operativa Pragmática:</strong> Un trader profesional no busca tener razón; busca fluir con el flujo de capitales real en lugar de luchar contra él con sesgos de opinión.</li>
      </ul>
      <div class="alert-box">
        <strong>📈 Regla Estoica:</strong> Controla tus reacciones y tu exposición. El mercado se mueve por desequilibrios entre oferta y demanda transaccional, no por tus deseos de éxito.
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
      <p>Hoy analizaremos en profundidad los <strong>sesgos cognitivos</strong>. Estos son atajos mentales que el cerebro evolutivo utiliza de forma automática para ahorrar energía y protegernos del peligro, pero que en el entorno probabilístico del trading resultan letales para tu capital de trabajo.</p>
      <h3>Sesgos Principales que Destruyen Cuentas</h3>
      <ul>
        <li><strong>Sesgo de Aversión a la Pérdida:</strong> El dolor psicológico de perder es dos veces más intenso que el placer de ganar. Esto te lleva a mover tu Stop Loss alejándolo del precio con la esperanza irreal de un rebote, transformando una pérdida pequeña y controlada en una catástrofe financiera.</li>
        <li><strong>Sesgo de Confirmación:</strong> Consiste en buscar de forma selectiva cualquier indicador o análisis que apoye tu posición abierta, mientras ignoras deliberadamente las señales obvias que indican que tu trade ha fallado.</li>
        <li><strong>Sesgo de Reciente:</strong> Evaluar tu sistema o tu habilidad basándote únicamente en los resultados de las últimas 2 o 3 operaciones, lo que te incita a cambiar de estrategia constantemente.</li>
      </ul>
      <p>Un trader profesional anula estas trampas mentales aplicando reglas de ejecución innegociables y auditando su comportamiento mediante una bitácora científica.</p>
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
      <p>El mercado es un <strong>entorno de probabilidades puras, no de certezas</strong>. Cada operación que ejecutas es un evento único, independiente y estadísticamente aislado de las operaciones anteriores y posteriores.</p>
      <h3>La Ley de la Distribución Aleatoria</h3>
      <p>Incluso con un sistema de trading validado que tenga un 60% de acierto estadístico a largo plazo, la distribución de operaciones ganadoras (W) y perdedoras (L) a corto plazo es completamente aleatoria. En una muestra de 100 operaciones, es matemáticamente normal experimentar rachas de 5 o 6 pérdidas consecutivas.</p>
      <div class="highlight-box">
        <strong>Pauta Probabilística:</strong> Si tu mente asocia un \"setup perfecto\" con una \"ganancia segura\", sufrirás un colapso psicológico al perder. Piensa en muestras de 100 operaciones, no en el resultado del trade individual actual.
      </div>
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
      <p>Para no ser la presa en el mercado de futuros, debes comprender los incentivos y necesidades del cazador: **las grandes instituciones financieras**.</p>
      <h3>Mecánica de la Liquidez y Contrapartida</h3>
      <p>Los bancos de inversión y fondos de cobertura operan con volúmenes masivos de contratos. Si intentan comprar 5,000 contratos de golpe en un soporte obvio, desplazarían el precio al alza de inmediato, auto-perjudicándose con precios caros. Necesitan que haya vendedores masivos en esa zona para emparejar sus compras de forma barata.</p>
      <p>Para lograrlo, el algoritmo interbancario empuja temporalmente el precio por debajo de los soportes retail para activar los Stop Losses de los compradores (que son órdenes de venta de mercado). Al ejecutarse esas ventas, las instituciones absorben la contrapartida a precios de descuento y lanzan la inyección alcista real.</p>
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
      <p>El <strong>Short Squeeze</strong> es una cascada de compras forzadas que ilustra el pánico técnico y los desequilibrios graves de las subastas.</p>
      <h3>La Cascada de Cierre de Posiciones Cortas</h3>
      <p>Cuando muchos operadores minoristas e institucionales se posicionan en venta en corto esperando que un activo caiga, colocan sus órdenes de protección (Buy Stops) justo por encima de máximos relativos. Si el precio sube y activa esos Buy Stops, estos se ejecutan como órdenes de compra a mercado para cerrar la posición.</p>
      <p>Esto genera una reacción en cadena: cada stop de venta activado inyecta más compras al mercado, acelerando el movimiento vertical al alza. Intentar buscar techos vendiendo en medio de este pánico es suicidio financiero, ya que estás luchando contra compras forzosas sin límite de volumen.</p>
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
      <p>Los <strong>Fakeouts</strong> (falsos rompimientos) ocurren de manera repetida en zonas obvias de soporte y resistencia. Aprender a identificarlos te evitará entrar tarde y quedar atrapado en el lado equivocado.</p>
      <h3>Confirmación frente a Absorción</h3>
      <p>Si el precio rompe un nivel de resistencia clave pero inmediatamente regresa al rango y cierra por debajo de él en la vela de 1 o 5 minutos, dejando una mecha larga superior, estamos ante un barrido de liquidez (*sweep*). El volumen institucional absorbió la demanda y no tiene intención de continuar al alza.</p>
      <p>Para validar una ruptura real (BOS), buscamos ver una vela con cuerpo completo cerrando por encima de la zona y con un desplazamiento fuerte en el volumen transaccional.</p>
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
      <p>Felicidades por completar el Módulo 1. Has aprendido que el precio es la única realidad del mercado y has expuesto los mecanismos de manipulación, liquidez y sesgos que destruyen al trader aficionado.</p>
      <p>A partir de hoy, adoptas la **Dicotomía del Control Estoica** en tu operativa: te enfocas al 100% en la calidad de tu proceso, el cálculo de riesgo y tu disciplina mental, aceptando de forma neutral y sin emociones el resultado financiero que el mercado decida entregarte en cada operación.</p>
      <div class="alert-box" style="border-left-color: var(--color-accent); background: rgba(59, 130, 246, 0.03);">
        <strong>📝 Evaluación del Módulo 1:</strong> Responde correctamente el cuestionario de abajo para certificar tu nivel de comprensión técnica y desbloquear el Módulo de Gestión y Disciplina.
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
      <p>Iniciamos el <strong>Módulo 2: Gestión y Disciplina</strong>. El trading no es un arte místico; es un negocio de **gestión del capital de trabajo y estadísticas aplicadas**.</p>
      <h3>La Tabla de Recuperación del Drawdown</h3>
      <p>Cuando pierdes capital operativo, tu capacidad matemática de recuperación se deteriora exponencialmente:</p>
      <ul>
        <li>Una pérdida del 10% requiere una ganancia del 11% para volver al punto inicial (Breakeven).</li>
        <li>Una pérdida del 30% requiere una ganancia del 43% para recuperarse.</li>
        <li>Una pérdida del 50% requiere duplicar la cuenta (100% de rentabilidad) solo para recuperar lo perdido.</li>
      </ul>
      <p>Arriesgar un porcentaje pequeño (máximo el 1% por operación) es la única vía matemática que garantiza que sobrevivirás a las rachas de pérdidas inevitables durante tu fase de aprendizaje.</p>
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
      <p>Una de las mayores revelaciones para un trader consistente es entender que **no necesitas una alta tasa de acierto para ganar dinero** de forma consistente.</p>
      <h3>La Ventaja del Ratio Riesgo/Beneficio (R:R) de 1:2</h3>
      <p>Si arriesgas $100 en cada operación para buscar un beneficio de $200 (R:R 1:2), las matemáticas de la asimetría te protegen:</p>
      <ul>
        <li>Incluso si pierdes el 60% de tus operaciones (ganas sólo 4 de cada 10), tu resultado final es positivo.</li>
        <li>4 operaciones ganadas x $200 = +$800</li>
        <li>6 operaciones perdidas x $100 = -$600</li>
        <li><strong>Resultado Neto: +$200</strong></li>
      </ul>
      <p>Buscar ratios de riesgo beneficio asimétricos te quita la presión psicológica de tener que \"adivinar\" o \"acertar\" siempre en tus análisis.</p>
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
      <p>El <strong>Daily Drawdown</strong> o Límite de Pérdida Diaria es el cinturón de seguridad que protege tu cuenta del peor enemigo que tienes: **tú mismo en un estado de secuestro emocional**.</p>
      <h3>La Neurobiología de las Pérdidas y la Revancha</h3>
      <p>Cuando experimentas pérdidas consecutivas en una sesión, tu cerebro activa la amígdala, la región responsable de las respuestas al miedo y al peligro. Esto nubla tu córtex prefrontal (la zona del cerebro encargada del análisis lógico y la planificación), llevándote a cometer locuras como aumentar el riesgo o sobreoperar buscando \"venganza\" contra el mercado.</p>
      <p>Establece un límite diario estricto (ej. 2 pérdidas en la sesión o el 2% de la cuenta). Al alcanzar este límite, tu única tarea es apagar el ordenador e irte. No intentes recuperar tu dinero bajo el efecto de la frustración.</p>
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
      <p>Lo que no se mide no se puede optimizar. La <strong>Bitácora de Trading</strong> no es una simple hoja de contabilidad financiera; es el registro de auditoría de tu comportamiento.</p>
      <h3>Los Datos que Debes Auditar</h3>
      <p>Una buena bitácora debe responder de forma objetiva a estas preguntas tras cada trade:</p>
      <ul>
        <li>¿Operé respetando el checklist de confluencias de mi sistema?</li>
        <li>¿Calculé el tamaño de la posición matemáticamente o por impulso?</li>
        <li>¿Mantuve el Stop Loss en su sitio o lo moví durante la operación?</li>
        <li>¿Qué emociones sentí antes, durante y después de la ejecución?</li>
      </ul>
      <p>Analizar estos patrones al final de cada mes te permitirá identificar de forma científica tus fugas de capital y corregirlas.</p>
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
      <p>Un trader profesional evalúa su rendimiento basándose en la **calidad de su proceso de toma de decisiones**, no únicamente en los resultados financieros de corto plazo.</p>
      <h3>Evaluación de Procesos</h3>
      <p>Un trade que viola todas las reglas de tu sistema pero que resulta ganador por pura suerte es un **mal trade** y representa una amenaza para tu cuenta a largo plazo. Por el contrario, un trade que respeta tus reglas pero toca el Stop Loss debido a la naturaleza probabilística del mercado es un **excelente trade**.</p>
      <p>Aprende a valorar y celebrar tu disciplina para seguir las reglas, y documenta rigurosamente costos operativos como comisiones y deslizamientos (*slippage*) de ejecución.</p>
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
      <p>La consistencia en los mercados financieros no se logra prediciendo el futuro; se logra **ejecutando un proceso idéntico** frente a una muestra amplia de operaciones.</p>
      <h3>La Ventaja Estadística (Edge)</h3>
      <p>Para saber si tu sistema tiene esperanza matemática positiva, necesitas ejecutar el mismo setup con las mismas reglas de riesgo y los mismos parámetros de entrada y salida al menos 100 veces. Si cambias de indicadores o de reglas cada vez que pierdes dos trades, estarás operando con un sistema aleatorio que destruirá tu capital a largo plazo.</p>
    `
  },
  day14: {
    id: "day14",
    pilar: 2,
    title: "Cálculo Dinámico de Contratos & Examen",
    unlocked: false,
    completed: false,
    challenge: "Firma tu manifiesto de riesgo y define tu riesgo máximo por operación (%) y tu límite de pérdida diario en dólares en tu bitácora.",
    content: `
      <p>El tamaño de tu posición nunca debe ser estimado o dejarse a la intuición. Se calcula matemáticamente antes de cada operación basándote en la volatilidad y la distancia de tu Stop Loss técnico.</p>
      <h3>La Fórmula Inquebrantable de Gestión de Riesgo</h3>
      <div class="highlight-box">
        <strong>Contratos = Riesgo Monetario Máximo / (Distancia de Stop Loss en Puntos x Valor de Punto por Contrato)</strong>
      </div>
      <p>Por ejemplo, si arriesgas el 1% de una cuenta de $10,000 ($100) y tu stop loss técnico está a 20 puntos en el Micro E-mini S&P 500 (MES, valor del punto = $5), debes operar exactamente 1 contrato:</p>
      <p><strong>$100 / (20 ptos x $5) = 1 Contrato.</strong></p>
      <p>Si la volatilidad del mercado te obliga a ampliar el Stop Loss a 40 puntos para que la operación respire, debes reducir la posición para que tu pérdida máxima siga siendo de exactamente $100.</p>
      <div class="alert-box" style="border-left-color: var(--color-accent); background: rgba(59, 130, 246, 0.03);">
        <strong>📝 Evaluación del Módulo 2:</strong> Aprueba el cuestionario de gestión de riesgo abajo para desbloquear el Módulo de Estrategia Técnica.
      </div>
    `
  },
  day15: {
    id: "day15",
    pilar: 3,
    title: "Estructura de Mercado Real",
    unlocked: false,
    completed: false,
    challenge: "Dibuja o identifica en tu simulador una serie de Máximos más Altos (HH) y Mínimos más Altos (HL) en una tendencia alcista.",
    content: `
      <p>Comenzamos el <strong>Módulo 3: Estrategia de Alta Probabilidad</strong>. Aprenderemos a leer el mercado de forma limpia, directa y **sin el ruido rezagado de los indicadores retail**.</p>
      <h3>La Subasta Continua del Mercado</h3>
      <p>El precio se mueve en una estructura de ondas determinadas por el flujo de órdenes en tiempo real. La estructura nos indica la dirección dominante de la subasta:</p>
      <ul>
        <li><strong>Estructura Alcista:</strong> Caracterizada por una serie consecutiva de Máximos más Altos (*Higher Highs* - HH) y Mínimos más Altos (*Higher Lows* - HL).</li>
        <li><strong>Estructura Bajista:</strong> Caracterizada por una serie de Máximos más Bajos (*Lower Highs* - LH) y Mínimos más Bajos (*Lower Lows* - LL).</li>
      </ul>
      <p>Alinear tus operaciones con la dirección de la estructura del mercado es la base fundamental de todo setup de alta probabilidad.</p>
    `
  },
  day16: {
    id: "day16",
    pilar: 3,
    title: "Ruptura de Estructura (BOS)",
    unlocked: false,
    completed: false,
    challenge: "Busca en el gráfico en vivo un cambio de tendencia marcado por un quiebre de estructura (BOS) y documenta los precios de los niveles rotos.",
    content: `
      <p>El <strong>BOS (Break of Structure)</strong> o ruptura de estructura es el primer indicio técnico real de que los participantes institucionales están cambiando la dirección del flujo de órdenes.</p>
      <h3>Confirmación del Cambio de Dirección</h3>
      <p>En una tendencia alcista, el último Mínimo Ascendente (HL) es el punto clave defendido por los compradores institucionales. Si el precio rompe y **cierra con cuerpo de vela** por debajo de este HL, la estructura alcista se anula de forma oficial (BOS Bajista), abriendo paso a una nueva secuencia estructural de ventas.</p>
      <div class="highlight-box">
        <strong>⚠️ Detalle Técnico:</strong> Un BOS real requiere que la vela cierre con su cuerpo fuera del nivel. Si la vela sólo lo cruza con una mecha y regresa rápido, se trata de un barrido de liquidez (*sweep*), no de una ruptura de estructura.
      </div>
    `
  },
  day17: {
    id: "day17",
    pilar: 3,
    title: "Soportes y Resistencias de Valor",
    unlocked: false,
    completed: false,
    challenge: "Identifica en el gráfico de futuros una zona donde el precio haya rebotado al menos dos veces con fuerte volumen y márcala como zona de valor.",
    content: `
      <p>Los soportes y resistencias no son líneas delgadas en el gráfico; son **zonas de acumulación de órdenes pendientes** que las instituciones defienden activamente.</p>
      <h3>Zonas de Oferta y Demanda</h3>
      <p>Una zona de demanda de valor se sitúa en el origen de un fuerte movimiento impulsivo alcista previo que rompió estructura. Al regresar el precio a este bloque por primera vez (retesteo), buscamos incorporarnos en compras porque la probabilidad de que los creadores de mercado defiendan e inyecten capital en sus posiciones originales es altamente favorable.</p>
    `
  },
  day18: {
    id: "day18",
    pilar: 3,
    title: "Acción del Precio Pura",
    unlocked: false,
    completed: false,
    challenge: "Realiza un análisis completo del activo actual en el simulador basándote únicamente en la estructura y la acción del precio actual sin indicadores.",
    content: `
      <p>Llenar tu pantalla de indicadores retrasados como el MACD, Bandas de Bollinger o cruces de medias móviles solo añade parálisis por análisis y retrasa tu toma de decisiones bajo presión.</p>
      <h3>Lectura de la Acción del Precio</h3>
      <p>Operar con el precio puro consiste en observar e interpretar la interacción de impulsos y retrocesos, el tamaño y la velocidad de los cuerpos de las velas, y la longitud de las mechas de rechazo de mínimos y máximos. Esta lectura en tiempo real te da una ventaja de velocidad decisiva frente a los operadores que esperan señales tardías de sus indicadores.</p>
    `
  },
  day19: {
    id: "day19",
    pilar: 3,
    title: "La Ley de Polaridad S/R",
    unlocked: false,
    completed: false,
    challenge: "Encuentra en el simulador un ejemplo de resistencia que, tras ser rota con intención, haya actuado como soporte. Anota los precios del testeo.",
    content: `
      <p>La <strong>Ley de Polaridad</strong> demuestra la memoria transaccional del mercado y la mecánica detrás del flujo de órdenes institucionales.</p>
      <h3>Soporte convertido en Resistencia (y viceversa)</h3>
      <p>Cuando una resistencia técnica fuerte es perforada al alza con volumen, los vendedores atrapados en esa zona se encuentran en pérdidas. Al regresar el precio a ese mismo nivel de precios, estos operadores cierran sus ventas a precio de entrada (Breakeven), lo que genera una oleada de compras del mercado. Esta fuerza de compra combinada con nuevos compradores transforma la antigua resistencia en un nuevo soporte.</p>
    `
  },
  day20: {
    id: "day20",
    pilar: 3,
    title: "Filtros Técnicos de Confluencia",
    unlocked: false,
    completed: false,
    challenge: "Utilizando la EMA 200 y el RSI 14, identifica si el precio cotiza en zona de compras o ventas y anota la señal del oscilador de momentum.",
    content: `
      <p>Aunque nuestra estrategia se basa en la estructura pura y la acción del precio, el Setup Visión Pro utiliza dos filtros objetivos para añadir confluencia estadística y evitar falsas entradas:</p>
      <ul>
        <li><strong>Filtro de Tendencia (EMA 200):</strong> Actúa como nuestra brújula direccional. Si el precio cotiza por encima de la Media Móvil Exponencial de 200 periodos, la tendencia mayor es alcista y sólo buscaremos compras. Si cotiza por debajo, buscaremos ventas en corto.</li>
        <li><strong>Filtro de Momentum (RSI 14):</strong> Confirmamos la fuerza del impulso cuando el Relative Strength Index de 14 períodos cruza el nivel neutral de 50 en la misma dirección de nuestra tendencia de fondo.</li>
      </ul>
    `
  },
  day21: {
    id: "day21",
    pilar: 3,
    title: "Evaluación de Lectura Técnica",
    unlocked: false,
    completed: false,
    challenge: "Explica detalladamente en tu bitácora por qué un gráfico sin indicadores de ruido mejora la toma de decisiones bajo presión.",
    content: `
      <p>Has finalizado con éxito el Módulo 3. Ahora sabes cómo identificar estructuras, rupturas BOS, zonas de polaridad y confluir filtros de momentum de forma profesional.</p>
      <p>Estás listo para pasar al **Módulo de Ejecución y Protocolos Operativos**, donde aprenderás las rutinas de un operador profesional y la gestión psicológica bajo presión de mercado real.</p>
      <div class="alert-box" style="border-left-color: var(--color-accent); background: rgba(59, 130, 246, 0.03);">
        <strong>📝 Evaluación del Módulo 3:</strong> Completa y aprueba el cuestionario técnico de abajo para desbloquear el Módulo de Ejecución y Autocontrol Mental.
      </div>
    `
  },
  day22: {
    id: "day22",
    pilar: 4,
    title: "Rutina y Protocolo del Trader",
    unlocked: false,
    completed: false,
    challenge: "Diseña por escrito tu rutina diaria antes de la sesión de trading: horas de sueño, preparación física, revisión de noticias y análisis técnico previo.",
    content: `
      <p>Comenzamos el <strong>Módulo 4: Ejecución y Evaluación</strong>. Un trader rentable no improvisa; se comporta como un deportista olímpico de alto rendimiento y sigue una rutina rigurosa.</p>
      <h3>La Rutina del Éxito Operativo</h3>
      <p>El trading requiere un enfoque y una claridad mental absoluta. Dormir las horas necesarias, realizar actividad física básica y mantener un estado mental de calma estoica antes de sentarse frente a las pantallas reduce drásticamente las decisiones irracionales y las entradas fuera del plan impulsadas por el estrés.</p>
    `
  },
  day23: {
    id: "day23",
    pilar: 4,
    title: "El Protocolo Pre-market y Checklist",
    unlocked: false,
    completed: false,
    challenge: "Escribe una lista de comprobación (checklist) de 5 puntos obligatorios que debes marcar de manera positiva antes de abrir cualquier operación en real.",
    content: `
      <p>Antes de despegar, un piloto de aviación revisa minuciosamente un checklist exhaustivo. En el trading de futuros, debes operar con la misma seriedad.</p>
      <h3>Checklist de Confluencias Operativas</h3>
      <ul>
        <li>¿El precio está cotizando a favor de la tendencia marcada por la EMA 200?</li>
        <li>¿El RSI 14 cruza o se mantiene a favor del impulso en vela cerrada?</li>
        <li>¿Tenemos un quiebre de estructura (BOS) claro a favor del trade?</li>
        <li>¿El Stop Loss está situado por debajo de un mínimo o máximo estructural real?</li>
        <li>¿El tamaño de los contratos ha sido calculado para arriesgar exactamente el 1%?</li>
      </ul>
      <p>Si alguna de estas preguntas es negativa, no hay operación. Respetar el checklist es tu escudo contra la aleatoriedad emocional.</p>
    `
  },
  day24: {
    id: "day24",
    pilar: 4,
    title: "Ejecución bajo Presión",
    unlocked: false,
    completed: false,
    challenge: "Realiza 5 operaciones en el simulador y documenta tu nivel de calma del 1 al 10 antes de hacer clic en los botones de COMPRAR o VENDER.",
    content: `
      <p>Cuando la sesión abre y el precio oscila con fuerza y velocidad, el cerebro reptil percibe el riesgo financiero como una amenaza física, inyectando cortisol y adrenalina a tu torrente sanguíneo.</p>
      <h3>El Autocontrol ante la Incertidumbre</h3>
      <p>La consistencia operativa consiste en ejecutar tu plan independientemente del miedo o de la avaricia momentáneos. Si has calculado correctamente tu riesgo monetario unitario y aceptas la pérdida potencial como el costo operativo de tu negocio de probabilidades, la ansiedad de apretar el gatillo disminuye notablemente y ejecutas con la frialdad de un algoritmo.</p>
    `
  },
  day25: {
    id: "day25",
    pilar: 4,
    title: "Protocolo de Cierre Post-Sesión",
    unlocked: false,
    completed: false,
    challenge: "Describe tu protocolo de cierre: ¿qué haces inmediatamente después de terminar tu sesión de trading para desconectar mentalmente?",
    content: `
      <p>Tu sesión de trading no finaliza cuando cierras la última posición abierta; finaliza cuando ejecutas tu **protocolo estoico de apagado**.</p>
      <h3>Evitar la Fatiga de Pantalla</h3>
      <p>Una vez terminado tu horario operativo programado, tu única tarea es guardar los datos en tu bitácora, guardar las capturas de tus operaciones y apagar por completo las plataformas. Quedarte horas observando los gráficos genera fatiga mental, fomenta la sobreoperación por aburrimiento y destruye la disciplina de tu rutina.</p>
    `
  },
  day26: {
    id: "day26",
    pilar: 4,
    title: "Auditoría Crítica de Operaciones",
    unlocked: false,
    completed: false,
    challenge: "Revisa tu bitácora de la semana pasada, analiza tu tasa de acierto y tu ratio R:R real. Anota cualquier desviación de tu plan de trading.",
    content: `
      <p>La auditoría crítica es el análisis racional e imparcial de tu historial operativo para asegurarte de que tu ejecución sigue alineada con la ventaja de tu sistema.</p>
      <h3>Métricas de Auditoría Crítica</h3>
      <ul>
        <li><strong>Profit Factor:</strong> Suma de ganancias brutas dividida por la suma de pérdidas brutas. Debe ser mayor a 1.2.</li>
        <li><strong>Tasa de Desviación del Plan:</strong> Número de operaciones operadas por impulso o miedo frente a operaciones que siguieron el checklist de confluencia. Debe ser cero.</li>
      </ul>
    `
  },
  day27: {
    id: "day27",
    pilar: 4,
    title: "El Diario de Errores Operativos",
    unlocked: false,
    completed: false,
    challenge: "Clasifica los últimos 5 errores cometidos en tu simulador como \"técnico\" (romper reglas del setup) o \"emocional\" (entrar por impaciencia o venganza).",
    content: `
      <p>Cometer errores es inevitable en el proceso de aprendizaje, pero repetir los mismos fallos operativos por falta de autoanálisis representa una negligencia grave de tu parte.</p>
      <h3>Clasificación Rigurosa de Errores</h3>
      <p>Registra de forma honesta cada error cometido en una sección específica de tu diario:</p>
      <ul>
        <li><strong>Error Técnico:</strong> Mala lectura de la estructura, error al trazar zonas o al calcular el tamaño de posición. Se corrige con estudio técnico.</li>
        <li><strong>Error Emocional:</strong> Entrar antes del cierre de vela por ansiedad (FOMO), ampliar el Stop Loss, o sobreoperar tras una pérdida. Se corrige con disciplina y protocolos rígidos.</li>
      </ul>
    `
  },
  day28: {
    id: "day28",
    pilar: 4,
    title: "Mejora Continua Estoica & Examen 28-Días",
    unlocked: false,
    completed: false,
    challenge: "Define una medida correctiva específica y procesable para el error más frecuente (técnico o emocional) que hayas detectado en tu diario de errores y aprueba el examen final.",
    content: `
      <p>El estoicismo no es una filosofía teórica; es una guía de acción pragmática. No te lamentes por los errores del pasado; utilízalos de forma científica para diseñar **acciones correctivas procesables**.</p>
      <h3>El Ciclo de Mejora Kaizen</h3>
      <p>Si tu auditoría revela que tu error principal es entrar de forma impulsiva antes del cierre de vela, tu regla correctiva obligatoria debe ser: \"No puedo tocar el ratón hasta que el temporizador de la vela actual en curso llegue a cero\". Automatiza tus barreras de comportamiento.</p>
      <div class="alert-box" style="border-left-color: gold; background: rgba(245, 158, 11, 0.03);">
        <strong>🏆 Examen de Certificación:</strong> Aprueba la evaluación final de 5 preguntas técnicas de abajo para desbloquear el diploma de los primeros 4 módulos y avanzar a la especialización institucional.
      </div>
    `
  },
  day29: {
    id: "day29",
    pilar: 5,
    title: "Bloques de Órdenes e Intervención Algorítmica",
    unlocked: false,
    completed: false,
    challenge: "Identifica en tu gráfico del simulador una vela de fuerte intención que haya roto un nivel estructural (BOS) y marca el origen de esa vela como un Bloque de Órdenes (OB) institucional.",
    content: `
      <p>Comenzamos el <strong>Módulo 5: Trading Institucional</strong>. En el trading institucional avanzado, entendemos que el mercado de futuros es conducido por algoritmos interbancarios avanzados de entrega de precios (como el IPDA).</p>
      <h3>Mecánica de un Order Block (OB)</h3>
      <p>Un Order Block es la última vela en sentido opuesto antes de una expansión impulsiva de fuerte volumen que rompe la estructura del mercado (BOS). Esta zona representa el rastro donde las grandes instituciones acumularon y distribuyeron sus órdenes límite.</p>
      <p>Dado que su volumen es demasiado grande para rellenarse al instante, dejan órdenes pendientes en esa zona de origen. Al regresar el precio a mitigar este nivel, estas órdenes se activan, provocando una reacción fuerte y predecible a favor del movimiento original.</p>
      <ul>
        <li><strong>Bullish OB:</strong> Última vela bajista previa a un impulso fuerte que quiebra un máximo estructural.</li>
        <li><strong>Bearish OB:</strong> Última vela alcista previa a una caída fuerte que quiebra un mínimo estructural.</li>
      </ul>
    `
  },
  day30: {
    id: "day30",
    pilar: 5,
    title: "Caza de Liquidez y la Ilusión de Soportes/Resistencias",
    unlocked: false,
    completed: false,
    challenge: "Encuentra una mecha larga que haya barrido un soporte o resistencia previa para luego darse la vuelta inmediatamente. Anota el precio del barrido de liquidez.",
    content: `
      <p>Hoy analizaremos la liquidez del mercado. Los operadores retail ven los soportes y resistencias como barreras impenetrables donde comprar o vender; las instituciones los ven como **piscinas de liquidez llenas de dinero** (Liquidity Pools).</p>
      <h3>La Caza de Stops (Stops Sweeps)</h3>
      <p>Para que una institución pueda acumular una posición de compra gigante, necesita que otros participantes le vendan en esa zona. Los Stop Losses de los compradores retail se sitúan justo por debajo de los soportes obvios, y se ejecutan como órdenes de venta a mercado.</p>
      <p>El algoritmo institucional empuja el precio temporalmente por debajo del soporte para activar estos stops (inyección forzosa de ventas minoristas), absorbiéndolos como compras baratas a precios de descuento para iniciar el movimiento alcista real.</p>
      <ul>
        <li><strong>SSL (Sell Stop Liquidity):</strong> Zonas de stops de compra por debajo de mínimos relativos.</li>
        <li><strong>BSL (Buy Stop Liquidity):</strong> Zonas de stops de venta por encima de máximos relativos.</li>
      </ul>
    `
  },
  day31: {
    id: "day31",
    pilar: 5,
    title: "Desequilibrios Algorítmicos e Ineficiencias (FVG)",
    unlocked: false,
    completed: false,
    challenge: "Localiza un desequilibrio de 3 velas en el simulador donde la primera y la tercera vela no se solapen, dejando un vacío o Fair Value Gap (FVG). Anota el precio del rebalanceo.",
    content: `
      <p>Hoy estudiamos los Fair Value Gaps. Cuando el capital institucional entra de golpe al mercado con fuerza, crea un desequilibrio drástico en el flujo de órdenes llamado **Fair Value Gap (FVG)** o ineficiencia de precios.</p>
      <h3>Anatomía del FVG (Desequilibrio de Velas)</h3>
      <p>Un FVG se compone de un patrón secuencial de 3 velas consecutivas. Ocurre cuando el movimiento de la segunda vela es tan rápido y voluminoso que la mecha de la primera vela y la de la tercera no logran tocarse, dejando un vacío intermedio donde el precio se entregó de forma ineficiente de un solo lado (compras o ventas).</p>
      <p>El algoritmo de precios interbancario tiene el mandato de regresar en el futuro a rellenar este vacío de precios para entregar el mercado de forma eficiente. Esto convierte a los FVG en excelentes imanes de precio y zonas de entrada confluentes.</p>
    `
  },
  day32: {
    id: "day32",
    pilar: 5,
    title: "Fractalidad y Alineación Temporal (HTF/LTF)",
    unlocked: false,
    completed: false,
    challenge: "Describe por escrito cómo utilizarías un gráfico de 1 hora para determinar la dirección general y un gráfico de 1 o 5 minutos para afinar tu stop loss de entrada.",
    content: `
      <p>Hoy analizaremos la fractalidad. Los mercados financieros se mueven de manera fractal; los mismos patrones se repiten de forma idéntica en marcos de 4 horas, 1 hora, 5 minutos o 1 minuto.</p>
      <h3>Análisis Top-Down (De Mayor a Menor)</h3>
      <p>El trader institucional consistente utiliza la fractalidad a su favor para refinar el riesgo y maximizar el ratio R:R:</p>
      <ul>
        <li><strong>Gráfico HTF (1H o 4H):</strong> Identifica la tendencia mayor, los flujos de órdenes dominantes y las zonas de interés de valor (POIs como Order Blocks o FVG de 1H).</li>
        <li><strong>Gráfico LTF (1m o 5m):</strong> Espera a que el precio llegue a la zona HTF y busca un cambio de carácter local (CHoCH / BOS local) para entrar al mercado con un Stop Loss de pocos puntos, multiplicando el ratio R:R.</li>
      </ul>
    `
  },
  day33: {
    id: "day33",
    pilar: 5,
    title: "Zonas Premium y Descuento: Comprar Barato, Vender Caro",
    unlocked: false,
    completed: false,
    challenge: "Traza un rango operativo desde el inicio del impulso hasta el final del retroceso en tu simulador. Identifica si el precio actual cotiza por encima (Premium) o por debajo (Descuento) del 50%.",
    content: `
      <p>Hoy analizamos los rangos de equilibrio. Las instituciones financieras operan bajo las leyes más básicas del comercio mayorista: **comprar al por mayor a precio de descuento y vender en zonas de precios premium**.</p>
      <h3>Determinación del Rango Operativo</h3>
      <p>Al trazar un rango desde el origen de un impulso hasta su extremo final, usamos la línea media del 50% (Equilibrio) como frontera técnica ineludible:</p>
      <ul>
        <li><strong>Zona Premium (Por encima del 50%):</strong> Zona cara. Únicamente buscamos confluencias de venta y descartamos cualquier compra de alto riesgo.</li>
        <li><strong>Zona de Descuento (Por debajo del 50%):</strong> Zona barata de rebaja. Aquí es donde buscamos incorporarnos en compras de alta probabilidad en confluencia con OBs y FVG de descuento.</li>
      </ul>
    `
  },
  day34: {
    id: "day34",
    pilar: 5,
    title: "El Poder de los Breaker Blocks (OB Roto)",
    unlocked: false,
    completed: false,
    challenge: "Describe la diferencia entre un Order Block normal y un Breaker Block (OB roto que cambia de función). Encuentra un ejemplo en tu simulador.",
    content: `
      <p>Hoy estudiamos los Breakers. ¿Qué ocurre cuando un bloque de órdenes institucional falla y es sobrepasado con fuerza? Se transforma en una zona operativa de alta fiabilidad llamada **Breaker Block**.</p>
      <h3>Mecánica de un Breaker Block</h3>
      <p>Un Breaker es un bloque de órdenes que fue roto con fuerza debido a una inyección masiva de volumen que barrió liquidez previa en sentido contrario. Cuando el precio regresa a testear este bloque roto, el algoritmo interbancario utiliza este nivel como soporte/resistencia dinámico para mitigar y cerrar a precio de equilibrio (Breakeven) las posiciones perdedoras acumuladas por las instituciones en la manipulación previa.</p>
    `
  },
  day35: {
    id: "day35",
    pilar: 5,
    title: "Evaluación de Trading Institucional",
    unlocked: false,
    completed: false,
    challenge: "Describe en un párrafo cómo se complementan un FVG y un Order Block para aumentar la probabilidad de éxito de tu entrada, y completa la evaluación del módulo.",
    content: `
      <p>Felicidades por culminar el Módulo de Trading Institucional. Hoy consolidamos la teoría del volumen interbancario, los barridos de stops y los rangos operativos de descuento y premium.</p>
      <p>A partir de mañana, avanzaremos hacia las herramientas de especialización final: perfiles de volumen avanzados, reglas de evaluación de firmas de fondeo y planes consistentes de interés compuesto.</p>
      <div class="alert-box" style="border-left-color: var(--color-accent); background: rgba(59, 130, 246, 0.03);">
        <strong>📝 Evaluación del Módulo 5:</strong> Responde y aprueba el cuestionario de abajo para certificar tu maestría en trading institucional y desbloquear la semana de especialización.
      </div>
    `
  },
  day36: {
    id: "day36",
    pilar: 6,
    title: "Subasta de Volumen: POC y Perfil de Volumen",
    unlocked: false,
    completed: false,
    challenge: "Identifica el Punto de Control de Volumen (POC) en una consolidación lateral y explica cómo usar las áreas de bajo volumen (LVN) para colocar tu Stop Loss técnico.",
    content: `
      <p>Comenzamos el <strong>Módulo 6: Especialización y Plan Final</strong>. Mientras que la acción de precio nos describe el movimiento del precio en el tiempo, el perfil de volumen nos indica **dónde se ha acumulado el verdadero volumen transaccional de contratos**.</p>
      <h3>Zonas Clave de Subasta de Volumen</h3>
      <ul>
        <li><strong>POC (Point of Control):</strong> El precio exacto donde se negoció el mayor volumen de la sesión. Actúa como el centro de gravedad del precio y zona de alta aceptación.</li>
        <li><strong>Value Area (VA):</strong> La zona de precios que concentra el 70% del volumen total transaccionado de la sesión.</li>
        <li><strong>LVN (Low Volume Nodes):</strong> Áreas de precios donde hubo poca negociación. Representan rechazo y velocidad, ideales para colocar Stop Losses detrás de ellas.</li>
      </ul>
    `
  },
  day37: {
    id: "day37",
    pilar: 6,
    title: "Reglas de Fondeo y Control de Drawdown",
    unlocked: false,
    completed: false,
    challenge: "Diseña tu plan de Drawdown Máximo Diario específico para una cuenta financiada simulada de $50,000, respetando el límite del 2% diario.",
    content: `
      <p>Hoy analizaremos las firmas de fondeo. Operar de forma profesional en la actualidad implica la gran ventaja de trabajar con capital de terceros a través de empresas de fondeo de futuros (*Prop Firms*).</p>
      <h3>Las Reglas de Supervivencia de las Prop Firms</h3>
      <p>Operar el capital de una firma de fondeo exige el máximo rigor y control de drawdown. Las reglas de consistencia de beneficios y límites estrictos de pérdida diaria (DLL) están diseñadas para forzar el comportamiento estoico del trader. Un solo día de indisciplina o venganza operativa se traduce en la cancelación inmediata de tu cuenta. La gestión emocional y el apego al riesgo son tus únicas armas de éxito.</p>
    `
  },
  day38: {
    id: "day38",
    pilar: 6,
    title: "Gestión Activa de Posición: Tomar Parciales y Riesgo Cero",
    unlocked: false,
    completed: false,
    challenge: "Simula una operación con 2 contratos en el simulador. Al alcanzar un R:R 1:1, cierra 1 contrato (toma de parcial) y mueve el Stop Loss del segundo contrato a Breakeven.",
    content: `
      <p>Hoy estudiamos la gestión activa. El objetivo final de un operador rentable no es acertar todas las operaciones, sino **extraer capital del mercado activamente y minimizar la varianza de pérdidas**.</p>
      <h3>Gestión Activa del Riesgo</h3>
      <p>La regla inquebrantable de la preservación de capital dictamina:</p>
      <ul>
        <li>Cuando tu trade avanza a un ratio R:R de 1:1, cierras el 50% de la posición (toma de beneficio parcial).</li>
        <li>Inmediatamente desplazas el Stop Loss del contrato restante a tu precio de entrada (Breakeven).</li>
      </ul>
      <p>Al hacer esto, has garantizado ganancias en tu saldo y has transformado la posición restante en una operación libre de riesgo financiero (*free trade*), liberándote de toda presión psicológica para dejar correr el beneficio al target final 1:2.</p>
    `
  },
  day39: {
    id: "day39",
    pilar: 6,
    title: "El Checklist de Albert Sierra",
    unlocked: false,
    completed: false,
    challenge: "Escribe tu Checklist final de 5 confluencias institucionales antes de cada trade en tu bitácora.",
    content: `
      <p>Hoy unificamos todo tu conocimiento en una rutina innegociable. El plan de trading se resume en seguir la disciplina de un piloto antes de cada operación.</p>
      <h3>El Checklist Maestro de Confluencias de Albert Sierra</h3>
      <p>Antes de pulsar los botones de compra o venta en el simulador de futuros, debes marcar positivamente y sin excepciones:</p>
      <ol>
        <li>¿El precio está reaccionando a una zona de interés o POI en marco temporal alto (OB / FVG en 1H)?</li>
        <li>¿Se ha barrido de forma obvia la liquidez en máximos o mínimos previos (Sweep de SSL o BSL)?</li>
        <li>¿Ha ocurrido un quiebre de estructura local con cuerpo de vela en temporalidad de entrada (BOS en 1m o 5m)?</li>
        <li>¿Cotizamos a precios de descuento para compras (barato) o premium para ventas (caro)?</li>
        <li>¿El tamaño de los contratos ha sido recalculado con precisión para no exponer más del 1% del capital?</li>
      </ol>
    `
  },
  day40: {
    id: "day40",
    pilar: 6,
    title: "Psicología y Psicotrading para Cuentas Financiadas",
    unlocked: false,
    completed: false,
    challenge: "Escribe tu plan de control de estrés ante la cercanía del drawdown máximo y cómo gestionarás las emociones de tu primer pago o retiro de una cuenta financiada.",
    content: `
      <p>Hoy analizaremos la psicología aplicada al capital financiado. Operar con capital institucional a través de cuentas financiadas (Prop Firms) introduce una carga psicológica distinta. Ya no estás arriesgando tu propio capital inicial, sino que estás operando bajo un conjunto estricto de reglas de control de pérdidas.</p>
      <h3>Preservar en vez de Agrandar</h3>
      <p>La presión por obtener retiros (payouts) y el miedo a violar el drawdown máximo diario pueden forzar malas conductas. El psicotrading estoico se centra en ver estas reglas como aliados disciplinarios, no como restricciones injustas. Aceptar que las reglas protegen el capital te libera de la tensión emocional y te permite ejecutar de forma objetiva.</p>
    `
  },
  day41: {
    id: "day41",
    pilar: 6,
    title: "Plan de Trading Consistente a Largo Plazo",
    unlocked: false,
    completed: false,
    challenge: "Traza un plan de asignación de capital para tus retiros de trading: define qué porcentaje se irá a capital propio, a impuestos, y a gastos de vida.",
    content: `
      <p>Hoy estudiamos el trading como un negocio formal. Para convertir el trading de futuros en una profesión sostenible a largo plazo, debes tratarlo como una corporación real.</p>
      <h3>La Asignación de Capital Inteligente</h3>
      <p>Esto requiere planificar el interés compuesto, pero también gestionar las ganancias de forma prudente. Al retirar fondos de tus cuentas de fondeo, debes destinarlos a la construcción de tu propio fondo patrimonial (\"el capital invisible\"), realizar previsiones para el pago de impuestos y comisiones, y mantener un colchón de seguridad operativa para épocas de baja volatilidad o drawdown temporal.</p>
    `
  },
  day42: {
    id: "day42",
    pilar: 6,
    title: "Evaluación de Maestría Final",
    unlocked: false,
    completed: false,
    challenge: "Completa y aprueba la evaluación final de Maestría del Ecosistema para obtener tu diploma definitivo firmado por Albert Sierra.",
    content: `
      <p>¡Has alcanzado el último día del Ecosistema-AS! En esta sesión consolidamos todo el conocimiento de los 6 pilares de maestría técnica y estoica.</p>
      <p>Repasamos la subasta de volumen por perfil, las reglas corporativas de fondeo, la gestión activa de posición con tomas parciales y el checklist final antes de cada trade. Estás listo para certificar tu maestría en trading profesional y recibir tu diploma.</p>
      <div class="alert-box" style="border-left-color: gold; background: rgba(245, 158, 11, 0.03);">
        <strong>🏆 Examen de Maestría Final del Ecosistema:</strong> Responde y aprueba la evaluación final técnica abajo para certificar tu maestría definitiva y completar el Ecosistema AS.
      </div>
    `
  }
};
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
      q: "Si pierdes el 50% de tu cuenta de trading, ¿qué porcentaje de rentabilidad necesitas ganar sobre el saldo restante solo para volver al punto inicial (breakeven)?",
      options: [
        "50%",
        "75%",
        "100% (Duplicar el capital restante)"
      ],
      answer: 2,
      explanation: "Perder el 50% reduce tu capital a la mitad. Para volver al capital inicial, debes duplicar (100% de ganancia) tu balance restante."
    },
    {
      q: "Con un Ratio Riesgo/Beneficio (R:R) de 1:2, ¿cuál es la tasa mínima de acierto requerida para estar en ganancias netas (sin contar comisiones)?",
      options: [
        "Aproximadamente 34% o más",
        "Exactamente 50%",
        "Por encima de 60%"
      ],
      answer: 0,
      explanation: "Con un R:R 1:2, ganar 1 operación compensa 2 pérdidas. A partir del 34% de acierto, el resultado neto de la muestra es matemáticamente positivo."
    },
    {
      q: "¿Qué dicta el protocolo estoico ante el secuestro emocional provocado por pérdidas consecutivas?",
      options: [
        "Apagar el ordenador e irse inmediatamente, aceptando el límite de pérdida diaria programado.",
        "Aumentar el tamaño de la posición para recuperar lo perdido rápidamente.",
        "Cambiar de activo a uno más volátil como el Nasdaq para compensar."
      ],
      answer: 0,
      explanation: "El drawdown diario actúa como cinturón de seguridad. Al tocar el límite, apagar la plataforma frena la destructiva toma de decisiones emocional."
    },
    {
      q: "En la bitácora técnica de procesos, ¿cómo se califica un trade ganador que violó las reglas del plan?",
      options: [
        "Como un excelente trade que demuestra intuición de mercado.",
        "Como un mal trade con resultado fortuito que pone en peligro la consistencia futura.",
        "Como un trade neutral que no requiere análisis."
      ],
      answer: 1,
      explanation: "Seguir las reglas define la consistencia. Un trade ganador fuera del plan fomenta indisciplina y hábitos destructivos a largo plazo."
    },
    {
      q: "¿Cómo calculas el tamaño de posición (contratos) si tu Stop Loss técnico está situado a mayor distancia de lo habitual?",
      options: [
        "Mantienes el mismo número de contratos y aceptas mayor pérdida.",
        "Reduces proporcionalmente el número de contratos para que el riesgo en dólares siga siendo el mismo.",
        "Aumentas los contratos para compensar la distancia."
      ],
      answer: 1,
      explanation: "El riesgo monetario es fijo (ej. 1% por trade). Si el Stop Loss técnico es amplio, el número de contratos debe disminuir para mantener el mismo riesgo."
    }
  ],
  3: [
    {
      q: "En una tendencia alcista estructural, ¿cómo se denominan los puntos clave de mínimos?",
      options: [
        "Mínimos más Bajos (LL)",
        "Mínimos más Altos (HL)",
        "Máximos más Altos (HH)"
      ],
      answer: 1,
      explanation: "Una tendencia alcista consiste en una sucesión de Máximos más Altos (HH) y Mínimos más Altos (HL)."
    },
    {
      q: "¿Qué confirmación técnica es obligatoria para validar un Quiebre de Estructura (BOS)?",
      options: [
        "Que una mecha de vela cruce el nivel y regrese rápido.",
        "Que el cuerpo de una vela cierre por fuera del último nivel estructural.",
        "Que el oscilador RSI esté en sobrecompra."
      ],
      answer: 1,
      explanation: "Un BOS requiere un cierre con cuerpo de vela fuera del nivel para confirmar la intención institucional de desplazar el precio."
    },
    {
      q: "¿Cuál es la diferencia entre un soporte minorista clásico y una zona de demanda de valor?",
      options: [
        "El soporte minorista es una zona de acumulación de medias móviles.",
        "La zona de demanda se localiza en el origen de un fuerte movimiento impulsivo previo que rompió estructura.",
        "No existe ninguna diferencia, son términos idénticos."
      ],
      answer: 1,
      explanation: "Las zonas de demanda representan áreas donde el volumen institucional desplazó el precio de forma agresiva, dejando órdenes pendientes."
    },
    {
      q: "En el Setup de Confluencia Visión Pro, ¿cuál es la función de la EMA 200?",
      options: [
        "Indicar el nivel exacto de toma de beneficios.",
        "Actuar como filtro direccional inquebrantable (compras sobre ella, cortos bajo ella).",
        "Medir la sobrecompra del oscilador."
      ],
      answer: 1,
      explanation: "La EMA 200 sirve de brújula de tendencia mayor para alinear todas nuestras operaciones a favor de la dirección dominante del mercado."
    },
    {
      q: "¿Cómo confirmamos la confluencia de momentum utilizando el oscilador RSI 14?",
      options: [
        "Cuando el RSI cruza la línea central de 50 en la misma dirección de la tendencia de la EMA 200.",
        "Cuando el RSI entra en la zona extrema de sobreventa.",
        "Cuando el RSI permanece plano cerca de cero."
      ],
      answer: 0,
      explanation: "El cruce de la línea 50 en el RSI valida que el impulso de corto plazo está alineado a favor del flujo tendencial."
    }
  ],
  4: [
    {
      q: "¿Qué propósito principal persigue la checklist pre-market de 5 puntos del operador?",
      options: [
        "Aumentar el número de operaciones ejecutadas por sesión.",
        "Actuar como un filtro objetivo para eliminar la aleatoriedad y la ejecución emocional.",
        "Predecir con exactitud hacia dónde irá el precio en la apertura."
      ],
      answer: 1,
      explanation: "La checklist actúa como protocolo de despegue para asegurar que sólo se ejecutan operaciones con confluencias técnicas preestablecidas."
    },
    {
      q: "Al auditar semanalmente tus estadísticas, ¿qué representa un 'Profit Factor' de 1.5?",
      options: [
        "Que tus ganancias brutas equivalen a 1.5 veces tus pérdidas brutas (operativa saludable).",
        "Que has perdido el 50% de la cuenta.",
        "Que tienes una tasa de acierto del 15%."
      ],
      answer: 0,
      explanation: "El Profit Factor mide la relación ganancias/pérdidas. Un ratio superior a 1.2 indica un sistema y una operativa rentables."
    },
    {
      q: "En el diario de errores, ¿cómo se clasifica el acto de entrar tarde a un trade debido al miedo a perder la oportunidad?",
      options: [
        "Error Técnico de trazado.",
        "Error Emocional de disciplina (FOMO).",
        "Ejecución perfecta del plan."
      ],
      answer: 1,
      explanation: "Entrar de forma impulsiva por miedo a perderse el trade es una manifestación clásica de FOMO (error emocional)."
    },
    {
      q: "¿Cuál es la regla de oro estoica del protocolo de cierre de sesión?",
      options: [
        "Mantener la plataforma abierta todo el día para vigilar el precio.",
        "Guardar capturas, registrar los datos en la bitácora y apagar por completo las pantallas.",
        "Seguir operando si la sesión fue perdedora."
      ],
      answer: 1,
      explanation: "El apagado de pantallas protege tu psicología del aburrimiento o la frustración, forzando la desconexión mental y la disciplina."
    },
    {
      q: "En el ciclo de mejora Kaizen, ¿cuál es el paso posterior a identificar un error recurrente en tu bitácora?",
      options: [
        "Lamentar el capital perdido y dudar de la estrategia.",
        "Diseñar e implementar una medida correctiva específica y obligatoria en tu comportamiento.",
        "Ignorar el error y esperar que no se repita en la siguiente sesión."
      ],
      answer: 1,
      explanation: "Kaizen consiste en corregir desviaciones mediante medidas accionables concretas para blindar el comportamiento en la siguiente sesión."
    }
  ],
  5: [
    {
      q: "¿Qué representa un Order Block (OB) válido en el trading institucional?",
      options: [
        "Cualquier vela de consolidación en el centro de un rango operativo lateral.",
        "La última vela en sentido opuesto previa a una expansión impulsiva de fuerte volumen que genera un BOS.",
        "El cruce de las bandas de Bollinger con alto volumen de contratos."
      ],
      answer: 1,
      explanation: "Un OB válido requiere haber generado una ruptura estructural (BOS) y haber dejado ineficiencias de entrega (FVG) en su expansión."
    },
    {
      q: "¿Por qué las instituciones financieras buscan cazar la liquidez de los soportes y resistencias minoristas (sweeps)?",
      options: [
        "Para inyectar volatilidad al mercado sin un fin transaccional.",
        "Para activar los Stop Losses minoristas (ventas/compras a mercado) y usarlos como contrapartida para llenar sus órdenes gigantes a precio de descuento.",
        "Para cerrar sus plataformas de negociación antes del fin de semana."
      ],
      answer: 1,
      explanation: "Las instituciones necesitan contrapartida de volumen para rellenar sus órdenes millonarias sin desplazar el precio en su contra; los sweeps proveen esa liquidez."
    },
    {
      q: "¿Qué define a un Fair Value Gap (FVG) o ineficiencia de precios?",
      options: [
        "Una secuencia de 3 velas donde la mecha de la primera y de la tercera no se solapan, dejando un vacío transaccional.",
        "Un gap de apertura de mercado de futuros el domingo por la tarde.",
        "Una consolidación estrecha que dura más de dos horas sin volumen."
      ],
      answer: 0,
      explanation: "El FVG representa una entrega ineficiente del precio donde sólo hubo participación de compras o ventas, y el mercado tiende a rebalancearlo en el futuro."
    },
    {
      q: "En el análisis top-down fractal, ¿cuál es la combinación ideal de marcos temporales?",
      options: [
        "Buscar el sesgo direccional y las zonas de interés en HTF (1H/4H), y esperar el gatillo y confirmación BOS en LTF (1m/5m).",
        "Operar en 1 minuto sin mirar gráficos mayores.",
        "Analizar en mensual para operar contratos de scalping rápido en segundos."
      ],
      answer: 0,
      explanation: "El marco HTF proporciona el sesgo y la zona de alta probabilidad, mientras que el marco LTF permite refinar la entrada para optimizar el R:R."
    },
    {
      q: "Si trazamos un rango operativo desde el origen del impulso hasta su fin, ¿dónde debemos situar las compras?",
      options: [
        "En la Zona Premium (por encima del 50% del rango) porque el precio sube rápido.",
        "En la Zona de Descuento (por debajo del 50% del rango) para comprar a precios baratos.",
        "En el precio de equilibrio exacto del 50% sin importar confluencias."
      ],
      answer: 1,
      explanation: "Comprar en descuento (barato) en confluencia con OB y FVG es la regla de oro mayorista de la especulación institucional."
    }
  ],
  6: [
    {
      q: "En la subasta de Volumen, ¿qué es el POC (Point of Control) y qué utilidad tiene?",
      options: [
        "El precio con mayor volumen de contratos negociados; actúa como imán del precio y punto de equilibrio dinámico.",
        "El nivel de precio más alto alcanzado en la sesión de futuros.",
        "Una señal de cruce de medias móviles en el perfil de volumen."
      ],
      answer: 0,
      explanation: "El POC es el nivel más negociado de la sesión, representando la zona de máxima aceptación de valor por parte de compradores y vendedores."
    },
    {
      q: "¿Cuál es la regla de oro para evitar la cancelación inmediata de una cuenta financiada (Prop Firm)?",
      options: [
        "Operar el máximo tamaño de contratos permitido desde el primer día.",
        "Respetar de forma inquebrantable el límite de pérdida diaria (drawdown) y no dejarse llevar por la frustración.",
        "Aumentar el riesgo tras cada operación fallida para recuperar rápido."
      ],
      answer: 1,
      explanation: "El control riguroso del drawdown diario y total es el único requisito ineludible que exigen las firmas de fondeo institucional."
    },
    {
      q: "¿Qué beneficio psicológico y matemático aporta la toma de parciales a R:R 1:1 y mover el Stop Loss a Breakeven?",
      options: [
        "Elimina las pérdidas futuras asegurando ganancias y transformando el trade en una operación libre de riesgo.",
        "Garantiza que siempre ganarás el 100% de las operaciones.",
        "Te obliga a pasar más horas mirando los gráficos."
      ],
      answer: 0,
      explanation: "Cobrar parciales y poner breakeven asegura ganancias reales en la cuenta y elimina el riesgo financiero, liberando al trader de estrés."
    },
    {
      q: "¿Qué porcentaje de riesgo monetario máximo por operación dicta el checklist definitivo de Albert Sierra?",
      options: [
        "El 5% de la cuenta.",
        "Exactamente el 1% del capital (o menos), calculado de forma estricta según la distancia del stop loss.",
        "Un número de contratos fijo sin importar la volatilidad."
      ],
      answer: 1,
      explanation: "Arriesgar máximo el 1% (o menos) es la armadura del trader estoico para preservar su capital de trabajo a largo plazo."
    },
    {
      q: "Para tratar el trading como un negocio consistente a largo plazo, ¿cómo debes gestionar tus retiros (payouts)?",
      options: [
        "Gastar todo el beneficio en bienes de consumo de inmediato.",
        "Asignar capital de forma inteligente a impuestos, colchón de drawdown operativo, y transferir a tu cuenta de capital propio (Capital Invisible).",
        "Dejar todo el beneficio en la cuenta de fondeo para operar con el máximo tamaño de contratos."
      ],
      answer: 1,
      explanation: "Retirar y distribuir capital hacia el ahorro patrimonial y la reserva de drawdown es la base del crecimiento de un negocio consistente."
    }
  ]
};

// Global App State
let activeSection = "welcome";
let activeDayId = "day1";
let activePilarAccordion = 1;
let activeQuizAnswers = {}; // { questionIndex: selectedOptionIndex }
let pilarPassedStates = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false };

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
  const totalDays = 42;

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
  if (confirm("¿Estás seguro de que deseas reiniciar todo tu progreso del curso de 42 días y tu bitácora?")) {
    localStorage.removeItem("vision_30day_progress");
    localStorage.removeItem("vision_simulator_balance");
    Object.keys(courseData).forEach((key, index) => {
      courseData[key].completed = false;
      courseData[key].unlocked = index === 0;
      localStorage.removeItem(`vision_challenge_${key}`);
    });
    pilarPassedStates = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false };
    saveProgress();
    updateUIProgress();
    renderAcademicMenu();
    showSection("welcome");
  }
};

// Unlock all lessons and quizzes
window.unlockAllLessons = () => {
  if (confirm("¿Deseas desbloquear todas las lecciones del curso de 42 días y evaluaciones para navegar libremente?")) {
    Object.keys(courseData).forEach(key => {
      courseData[key].unlocked = true;
    });
    pilarPassedStates = { 1: true, 2: true, 3: true, 4: true, 5: true, 6: true };
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
  const startDayNum = (pilarId - 1) * 7 + 1;
  window.location.href = `template_leccion.html?day=${startDayNum}`;
};

// Render Collapsible sidebar week list
const renderAcademicMenu = () => {
  const container = document.getElementById("academic-menu-container");
  if (!container) return;

  let html = "";
  
  const pilares = [
    { id: 1, name: "Pilar 1: Mentalidad Ganadora", icon: "brain" },
    { id: 2, name: "Pilar 2: Gestión y Disciplina", icon: "shield-check" },
    { id: 3, name: "Pilar 3: Estrategia de Alta Probabilidad", icon: "trending-up" },
    { id: 4, name: "Pilar 4: Ejecución y Evaluación", icon: "activity" },
    { id: 5, name: "Pilar 5: Trading Institucional", icon: "box" },
    { id: 6, name: "Pilar 6: Especialización y Plan Final", icon: "check-square" }
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
      title = "Estructura de Mercado (Tendencia Alcista)";
      elementsHtml += wave([[40, 160], [100, 100], [140, 120], [210, 60], [250, 85], [320, 30], [360, 50], [420, 15]], "#3b82f6", 3.5);
      
      elementsHtml += circle(100, 100, 4, "#3b82f6"); elementsHtml += text(100, 85, "HH", 9.5, "#3b82f6", "middle", "bold");
      elementsHtml += circle(210, 60, 4, "#3b82f6"); elementsHtml += text(210, 45, "HH", 9.5, "#3b82f6", "middle", "bold");
      elementsHtml += circle(320, 30, 4, "#3b82f6"); elementsHtml += text(320, 15, "HH", 9.5, "#3b82f6", "middle", "bold");
      
      elementsHtml += circle(140, 120, 4, "#10b981"); elementsHtml += text(140, 136, "HL", 9.5, "#10b981", "middle", "bold");
      elementsHtml += circle(250, 85, 4, "#10b981"); elementsHtml += text(250, 101, "HL", 9.5, "#10b981", "middle", "bold");
      elementsHtml += circle(360, 50, 4, "#10b981"); elementsHtml += text(360, 66, "HL", 9.5, "#10b981", "middle", "bold");
      break;

    case 16:
      title = "Quiebre de Estructura (BOS Bajista)";
      elementsHtml += wave([[40, 140], [100, 80], [160, 110], [220, 50], [280, 125], [320, 140]], "#3b82f6", 3.5);
      
      elementsHtml += line(160, 110, 340, 110, "#ef4444", 1.2, "3,3");
      elementsHtml += circle(280, 125, 5, "#ef4444");
      elementsHtml += text(345, 114, "BOS Bajista (Quiebre)", 9.5, "#ef4444", "start", "bold");
      break;

    case 17:
      title = "Zonas de Oferta y Demanda";
      elementsHtml += `
        <rect x="40" y="30" width="420" height="35" fill="rgba(239, 68, 68, 0.05)" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="2,2" rx="4" />
        <text x="250" y="52" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">ZONA DE OFERTA INSTITUCIONAL (Ventas)</text>
        
        <rect x="40" y="135" width="420" height="35" fill="rgba(16, 185, 129, 0.05)" stroke="#10b981" stroke-width="1.2" stroke-dasharray="2,2" rx="4" />
        <text x="250" y="157" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">ZONA DE DEMANDA INSTITUCIONAL (Compras)</text>
      `;
      break;

    case 18:
      title = "Acción del Precio Pura";
      elementsHtml += `
        <!-- Stylized pinbar pattern -->
        <line x1="250" y1="50" x2="250" y2="150" stroke="#10b981" stroke-width="3" />
        <rect x="242" y="50" width="16" height="25" fill="#10b981" rx="2" />
        <circle cx="250" cy="150" r="6" fill="#10b981" />
        <text x="250" y="172" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">Pinbar Alcista (Rechazo de Mínimos)</text>
      `;
      break;

    case 19:
      title = "La Ley de Polaridad";
      elementsHtml += line(40, 110, 460, 110, "#f59e0b", 2);
      elementsHtml += text(45, 100, "Resistencia Antigua", 9, "#f59e0b");
      elementsHtml += text(45, 125, "Soporte Nuevo (Polaridad)", 9, "#10b981", "start", "bold");
      
      elementsHtml += wave([[60, 160], [130, 130], [200, 140], [270, 80], [330, 110], [410, 50]], "#3b82f6", 3);
      elementsHtml += circle(330, 110, 6, "#10b981");
      break;

    case 20:
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

    case 21:
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

    case 22:
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

    case 23:
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

    case 24:
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

    case 25:
      title = "Apagado y Cierre Operativo";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#131a22" stroke="#ef4444" stroke-width="1.5" rx="8" />
        <circle cx="250" cy="90" r="30" fill="rgba(239, 68, 68, 0.05)" stroke="#ef4444" stroke-width="3" />
        <line x1="250" y1="72" x2="250" y2="92" stroke="#ef4444" stroke-width="5" stroke-linecap="round" />
        <text x="250" y="145" fill="#f3f4f6" font-size="12" font-weight="bold" text-anchor="middle">SISTEMA APAGADO</text>
      `;
      break;

    case 26:
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

    case 27:
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

    case 28:
      title = "Bucle de Mejora Continua Estoica";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#131a22" stroke="#242f3d" rx="8" />
        
        <path d="M 250,55 A 45,45 0 1,1 205,100" fill="none" stroke="#3b82f6" stroke-width="3" marker-end="url(#arr-28)" />
        <path d="M 205,100 A 45,45 0 0,1 250,145" fill="none" stroke="#10b981" stroke-width="3" marker-end="url(#arr-28)" />
        <path d="M 250,145 A 45,45 0 0,1 250,55" fill="none" stroke="#f59e0b" stroke-width="3" marker-end="url(#arr-28)" />
        
        <text x="250" y="80" fill="#3b82f6" font-size="8.5" font-weight="bold" text-anchor="middle">1. AUDITAR</text>
        <text x="180" y="115" fill="#10b981" font-size="8.5" font-weight="bold" text-anchor="middle">2. MEDIR</text>
        <text x="320" y="115" fill="#f59e0b" font-size="8.5" font-weight="bold" text-anchor="middle">3. CORREGIR</text>
      `;
      break;

    case 29:
      title = "Order Block (OB) e Intervención Algorítmica";
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

    case 30:
      title = "sweeps de Liquidez (SSL / BSL)";
      elementsHtml += `
        <line x1="40" y1="120" x2="460" y2="120" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3" />
        <text x="50" y="112" fill="#ef4444" font-size="9">Sell Stops Pool (Soporte Obvio Minorista)</text>

        <!-- Wave sweeping -->
        <path d="M 60,80 L 150,120 L 220,90 L 290,120 L 310,155 L 350,60" fill="none" stroke="#3b82f6" stroke-width="3" />
        
        <circle cx="310" cy="155" r="5" fill="#10b981" />
        <text x="310" y="202" fill="#10b981" font-size="9" font-weight="bold" text-anchor="middle">Barrido de Stops (SSL Sweep)</text>
      `;
      break;

    case 31:
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

    case 32:
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
        <path d="M 225,105 L 275,105" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#arr-32)" />
      `;
      break;

    case 33:
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

    case 34:
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

    case 35:
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

    case 36:
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

    case 37:
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

    case 38:
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

    case 39:
      title = "Curva de Crecimiento y Consistencia";
      elementsHtml += `
        <text x="250" y="45" fill="#f3f4f6" font-size="11" font-weight="bold" text-anchor="middle">PLAN DE ESCALAMIENTO PROFESIONAL</text>
        <line x1="60" y1="160" x2="440" y2="160" stroke="#242f3d" stroke-width="1.5" />
        <line x1="60" y1="60" x2="60" y2="160" stroke="#242f3d" stroke-width="1.5" />
        
        <path d="M 60,160 Q 180,150 260,100 T 420,60" fill="none" stroke="#10b981" stroke-width="3" />
        <circle cx="260" cy="100" r="5" fill="#f59e0b" />
        <text x="260" y="85" fill="#f59e0b" font-size="8.5" font-weight="bold" text-anchor="middle">Retiro Seguro ($2,500)</text>
        
        <circle cx="420" cy="60" r="5" fill="#10b981" />
        <text x="425" y="52" fill="#10b981" font-size="8.5" font-weight="bold">Cuenta Duplicada / Escalamiento</text>
      `;
      break;

    case 40:
      title = "Gestión de Retiros y Payouts";
      elementsHtml += `
        <rect x="40" y="40" width="420" height="135" fill="#131a22" stroke="#242f3d" rx="6" />
        <text x="250" y="62" fill="#f3f4f6" font-size="11" font-weight="bold" text-anchor="middle">Distribución de Beneficios (Prop Firm)</text>
        
        <g fill="#9ca3af" font-size="9.5" transform="translate(60, 95)">
          <text x="0" y="0">1. RETIRO SOLICITADO:</text>
          <text x="180" y="0" fill="#10b981" font-weight="bold">80% / 90% para el Trader</text>
          
          <text x="0" y="24">2. COLCHÓN DE DRAWDOWN:</text>
          <text x="180" y="24" fill="#3b82f6" font-weight="bold">Mantener reserva de seguridad</text>
          
          <text x="0" y="48">3. CAPITAL INVISIBLE:</text>
          <text x="180" y="48" fill="#f59e0b" font-weight="bold">Invertir en cuenta de fondos propios</text>
        </g>
      `;
      break;

    case 41:
      title = "Plan de Interés Compuesto y Negocio";
      elementsHtml += `
        <rect x="50" y="30" width="400" height="150" fill="#131a22" stroke="#242f3d" rx="8" />
        <text x="250" y="52" fill="#f3f4f6" font-size="10" font-weight="bold" text-anchor="middle">CRECIMIENTO ANUAL DE CAPITAL INVISIBLE</text>
        
        <!-- Bar 1 -->
        <rect x="100" y="110" width="30" height="40" fill="#3b82f6" rx="2" />
        <text x="115" y="165" fill="#9ca3af" font-size="8" text-anchor="middle">Mes 1</text>
        
        <!-- Bar 2 -->
        <rect x="170" y="90" width="30" height="60" fill="#3b82f6" rx="2" />
        <text x="185" y="165" fill="#9ca3af" font-size="8" text-anchor="middle">Mes 3</text>
        
        <!-- Bar 3 -->
        <rect x="240" y="70" width="30" height="80" fill="#3b82f6" rx="2" />
        <text x="255" y="165" fill="#9ca3af" font-size="8" text-anchor="middle">Mes 6</text>
        
        <!-- Bar 4 (Gold) -->
        <rect x="310" y="45" width="30" height="105" fill="#d4af37" rx="2" />
        <text x="325" y="165" fill="#d4af37" font-size="8" font-weight="bold" text-anchor="middle">Mes 12</text>
      `;
      break;

    case 42:
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
  
  if ([7, 14, 21, 28, 35, 42].includes(dayNum)) {
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

  // Read only the educational content, stripping HTML tags
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = day.content;
  let textToRead = tempDiv.innerText || tempDiv.textContent || "";

  // Replace $ followed by number with "[number] dólares" and other currency references to avoid TTS pronouncing $ as "pesos"
  textToRead = textToRead.replace(/\$(\d+(?:[.,]\d+)?)/g, "$1 dólares");
  textToRead = textToRead.replace(/\$/g, " dólares ");
  textToRead = textToRead.replace(/USD/gi, " dólares ");

  // Strip Markdown symbols like * or _ to make it read like a natural human voice (no pronouncing "asterisco", etc.)
  textToRead = textToRead.replace(/[*_#`~]/g, "");
  textToRead = textToRead.replace(/\s+/g, " "); // collapse whitespace
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
    const isExamDay = [7, 14, 21, 28, 35, 42].includes(dayNum);

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
