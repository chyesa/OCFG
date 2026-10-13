/**
 * Waste items master database (12 items)
 * Compliant with South Korean Ministry of Environment Recycling Standards
 */
const TRASH_DATABASE = [
    {
        id: "pet_clear",
        name: "무색 투명 음료 페트병",
        icon: "🍾",
        mark: "무색페트",
        material: "PET (무색)",
        parts: "페트병 본체, 비닐 라벨, 플라스틱 뚜껑",
        correctBin: "pet_clear",
        prep: "내용물을 비우고 물로 헹군 뒤, 비닐 라벨을 떼어내고 압착하여 전용 수거함에 배출합니다.",
        explanation: "투명 페트병은 고품질 재생 섬유로 재활용되므로 색깔 있는 플라스틱과 분리하여 '투명 페트병 전용 수거함'에 배출합니다.",
        warning: "라벨을 제거하지 않거나 유색 페트병과 섞이면 재활용 품질이 저하됩니다.",
        score: 100
    },
    {
        id: "pet_color",
        name: "유색 플라스틱 음료병",
        icon: "🧃",
        mark: "플라스틱",
        material: "PET (유색) / PP",
        parts: "플라스틱 병, 라벨, 뚜껑",
        correctBin: "plastics",
        prep: "내용물을 비우고 상표 라벨을 제거한 후 일반 플라스틱류로 배출합니다.",
        explanation: "색깔이 있는 페트병은 무색 투명 페트병과 재활용 공정이 다르므로 일반 '플라스틱류' 수거함으로 배출합니다.",
        warning: "투명 페트병 전용 수거함에 섞이지 않도록 주의하세요.",
        score: 100
    },
    {
        id: "plastic_container",
        name: "깨끗한 플라스틱 배달 용기",
        icon: "🍱",
        mark: "플라스틱",
        material: "PP / PS",
        parts: "용기 본체, 뚜껑",
        correctBin: "plastics",
        prep: "음식물 이물질을 물로 깨끗이 세척하고 말린 후 배출합니다.",
        explanation: "이물질이 깨끗이 제거된 플라스틱 용기는 '플라스틱류'로 재활용할 수 있습니다.",
        warning: "양념이 착색되어 지워지지 않거나 이물질이 남은 용기는 일반 쓰레기로 버려야 합니다.",
        score: 100
    },
    {
        id: "can_aluminum",
        name: "알루미늄 음료 캔",
        icon: "🥤",
        mark: "캔류",
        material: "알루미늄",
        parts: "캔 본체",
        correctBin: "cans",
        prep: "내용물을 비우고 물로 헹군 뒤 눌러서 찌그러뜨려 배출합니다.",
        explanation: "알루미늄 캔은 재활용 효율이 매우 높습니다. '캔·금속류' 수거함에 배출합니다.",
        warning: "담배꽁초 등 이물질을 넣지 마세요.",
        score: 100
    },
    {
        id: "can_steel",
        name: "통조림 철제 캔",
        icon: "🥫",
        mark: "캔류",
        material: "철 (Steel)",
        parts: "철캔 본체, 뚜껑",
        correctBin: "cans",
        prep: "내용물을 비우고 뚜껑은 캔 안으로 넣어서 캔·금속류로 배출합니다.",
        explanation: "철제 캔은 내용물을 비운 후 '캔·금속류'로 배출합니다.",
        warning: "날카로운 뚜껑 절단면에 다치지 않도록 주의하세요.",
        score: 100
    },
    {
        id: "paper_box",
        name: "깨끗한 종이상자",
        icon: "📦",
        mark: "종이",
        material: "골판지 / 종이",
        parts: "종이상자, 테이프, 운송장 스티커",
        correctBin: "paper",
        prep: "비닐 테이프와 택배 운송장 스티커를 완전히 제거한 뒤 펼쳐서 배출합니다.",
        explanation: "테이프나 스티커가 붙어있으면 종이 재해반죽 공정에 방해가 되므로 모두 제거 후 '종이류'로 배출합니다.",
        warning: "물에 젖거나 이물질이 묻은 상자는 종량제 봉투에 버려야 합니다.",
        score: 120
    },
    {
        id: "paper_pack_regular",
        name: "일반 우유 종이팩",
        icon: "🥛",
        mark: "종이팩",
        material: "종이팩 (PE 코팅)",
        parts: "우유팩 본체",
        correctBin: "paper_packs",
        prep: "내용물을 비우고 물로 헹군 후 펼쳐 말려 종이팩 전용 수거함에 배출합니다.",
        explanation: "종이팩은 고급 화장지 원료가 되므로 일반 폐지와 구분하여 '종이팩류'로 분리배출합니다.",
        warning: "일반 폐지 상자류와 섞어 버리면 재활용이 어렵습니다.",
        score: 150
    },
    {
        id: "paper_pack_aseptic",
        name: "멸균 두유 종이팩",
        icon: "🧃",
        mark: "멸균팩",
        material: "종이팩 (알루미늄 코팅)",
        parts: "멸균팩, 비닐 빨대",
        correctBin: "paper_packs",
        prep: "비닐 빨대를 분리하고, 내부를 헹군 뒤 펼쳐 말려 종이팩 수거함에 배출합니다.",
        explanation: "멸균팩은 공기 차단 알루미늄이 융착되어 있어 헹군 뒤 '종이팩류' 수거함에 배출합니다.",
        warning: "플라스틱 빨대는 비닐/플라스틱류로 따로 분리하세요.",
        score: 150
    },
    {
        id: "glass_bottle",
        name: "유리 음료병",
        icon: "🍾",
        mark: "유리",
        material: "유리",
        parts: "유리병, 뚜껑",
        correctBin: "glass",
        prep: "내용물을 비우고 뚜껑을 분리한 뒤 깨지지 않게 '유리병류'에 배출합니다.",
        explanation: "깨끗한 유리병은 빈용기 재사용 또는 유리 재활용이 가능합니다.",
        warning: "깨진 유리, 거울, 내열유리, 도자기는 재활용이 안 되므로 안심봉투/종량제 봉투에 버리세요.",
        score: 100
    },
    {
        id: "vinyl_clean",
        name: "깨끗한 비닐 포장재",
        icon: "🛍️",
        mark: "비닐류",
        material: "LDPE / HDPE / OTHER",
        parts: "비닐봉지, 포장 비닐",
        correctBin: "vinyl",
        prep: "내용물을 비우고 투명 비닐봉지에 담아 흩날리지 않게 배출합니다.",
        explanation: "오염되지 않은 깨끗한 비닐은 '비닐류'로 배출 시 성형연료 등으로 재활용됩니다.",
        warning: "음식물이 묻은 비닐은 일반 쓰레기로 버려야 합니다.",
        score: 100
    },
    {
        id: "multi_material",
        name: "과자 봉지",
        icon: "🍿",
        mark: "비닐류",
        material: "OTHER (복합재질)",
        parts: "비닐 포장재",
        correctBin: "vinyl",
        prep: "부스러기를 털어내고 접지 말고 펼쳐서 비닐류로 배출합니다.",
        explanation: "복합재질 비닐도 내부가 깨끗하다면 '비닐류'로 분리배출이 가능합니다.",
        warning: "딱지 모양으로 접어 버리면 선별 작업 시 내부 확인이 안 되어 재활용이 안 됩니다.",
        score: 120
    },
    {
        id: "dirty_container",
        name: "음식물이 심하게 묻은 용기",
        icon: "🍜",
        mark: "종량제봉투",
        material: "오염된 스티로폼/플라스틱",
        parts: "컵라면 용기 등",
        correctBin: "general",
        prep: "세척 후에도 기름때나 국물 자국이 지워지지 않으면 종량제 봉투에 배출합니다.",
        explanation: "음식물로 오염된 용기는 다른 재활용품까지 오염시키므로 '일반 폐기물'로 배출해야 합니다.",
        warning: "오염된 용기를 재활용함에 넣으면 수거품 전량이 폐기될 수 있습니다.",
        score: 150
    }
];

/* Master Bins Database */
const BINS_DATABASE = [
    { id: "pet_clear", name: "투명 페트병", color: "bg-sky-500", icon: "🍾" },
    { id: "plastics", name: "플라스틱류", color: "bg-blue-600", icon: "🥤" },
    { id: "cans", name: "캔·금속류", color: "bg-amber-600", icon: "🥫" },
    { id: "paper", name: "종이류", color: "bg-amber-800", icon: "📦" },
    { id: "paper_packs", name: "종이팩류", color: "bg-emerald-600", icon: "🥛" },
    { id: "glass", name: "유리병류", color: "bg-teal-600", icon: "🏺" },
    { id: "vinyl", name: "비닐류", color: "bg-indigo-600", icon: "🛍️" },
    { id: "general", name: "일반 폐기물", color: "bg-slate-700", icon: "🗑️" }
];

/**
 * Web Audio API Sound Effects Synthesizer
 */
class SoundEngine {
    constructor() {
        this.ctx = null;
        this.enabled = true;
    }

    init() {
        try {
            if (!this.ctx) {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                if (AudioContext) {
                    this.ctx = new AudioContext();
                }
            }
            if (this.ctx && this.ctx.state === 'suspended') {
                this.ctx.resume();
            }
        } catch(e) {
            console.log("Audio Context initialization skipped.");
        }
    }

    playCast() {
        if (!this.enabled || !this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(400, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.22);
            gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.22);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.22);
        } catch(e){}
    }

    playCatch() {
        if (!this.enabled || !this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(250, this.ctx.currentTime);
            osc.frequency.linearRampToValueAtTime(600, this.ctx.currentTime + 0.2);
            gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.22);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.22);
        } catch(e){}
    }

    playCorrect() {
        if (!this.enabled || !this.ctx) return;
        try {
            const now = this.ctx.currentTime;
            const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
            notes.forEach((freq, idx) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now + idx * 0.08);
                gain.gain.setValueAtTime(0.25, now + idx * 0.08);
                gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.22);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now + idx * 0.08);
                osc.stop(now + idx * 0.08 + 0.22);
            });
        } catch(e){}
    }

    playWrong() {
        if (!this.enabled || !this.ctx) return;
        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(180, now);
            osc.frequency.setValueAtTime(130, now + 0.12);
            gain.gain.setValueAtTime(0.25, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.28);
        } catch(e){}
    }
}

const sound = new SoundEngine();

/**
 * Game State & Canvas Controller
 */
class OceanGame {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        
        // Difficulty Settings
        this.difficulty = 'easy';
        this.diffSettings = {
            easy: { time: 120, speedMult: 0.7 },
            normal: { time: 90, speedMult: 1.0 },
            hard: { time: 60, speedMult: 1.4 }
        };

        // Core State
        this.score = 0;
        this.highScore = this.loadHighScore();
        this.combo = 0;
        this.maxCombo = 0;
        this.timeRemaining = 90;
        this.cleanliness = 30; // 0% to 100%
        this.totalCaught = 0;
        this.correctCount = 0;
        this.wrongCount = 0;
        this.isPaused = false;
        this.isPlaying = false;
        this.timerInterval = null;

        // Fishing Mechanics
        this.floatingItems = [];
        this.fishes = [];
        this.selectedTrash = null;
        this.currentSortingItem = null;
        this.hook = {
            x: 0,
            y: 60,
            targetX: 0,
            targetY: 0,
            state: 'idle', // idle, dropping, reeling, returning
            caughtItem: null,
            speed: 8
        };

        // Dimensions
        this.width = 0;
        this.height = 0;

        this.initEventListeners();
        this.resizeCanvas();
        this.updateHighScoreDisplay();
    }

    loadHighScore() {
        try {
            const saved = localStorage.getItem('ocean_fishing_highscore');
            return saved ? parseInt(saved, 10) || 0 : 0;
        } catch (e) {
            console.warn("localStorage disabled or unavailable:", e);
            return 0;
        }
    }

    saveHighScore() {
        if (this.score > this.highScore) {
            this.highScore = this.score;
            try {
                localStorage.setItem('ocean_fishing_highscore', this.highScore.toString());
            } catch (e) {
                console.warn("Failed to save high score to localStorage:", e);
            }
        }
        this.updateHighScoreDisplay();
    }

    updateHighScoreDisplay() {
        const hudEl = document.getElementById('hud-high-score');
        const startEl = document.getElementById('start-high-score');
        if (hudEl) hudEl.innerText = this.highScore.toLocaleString();
        if (startEl) startEl.innerText = `${this.highScore.toLocaleString()}점`;
    }

    resizeCanvas() {
        this.width = this.canvas.parentElement.clientWidth;
        this.height = this.canvas.parentElement.clientHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        if (this.hook.state === 'idle') {
            this.hook.x = this.width / 2;
        }
    }

    isModalOpen() {
        return !document.getElementById('modal-sorting').classList.contains('hidden') ||
               !document.getElementById('modal-feedback').classList.contains('hidden') ||
               !document.getElementById('modal-tutorial').classList.contains('hidden') ||
               !document.getElementById('modal-codex').classList.contains('hidden') ||
               !document.getElementById('modal-result').classList.contains('hidden') ||
               !document.getElementById('screen-start').classList.contains('hidden');
    }

    initEventListeners() {
        window.addEventListener('resize', () => this.resizeCanvas());

        // Canvas Mouse & Touch Interactions
        const handlePointer = (e) => {
            if (!this.isPlaying || this.isPaused || this.isModalOpen()) return;
            sound.init();

            const rect = this.canvas.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            const clickX = clientX - rect.left;
            const clickY = clientY - rect.top;

            // Find if clicked on floating trash
            let clickedItem = null;
            for (const item of this.floatingItems) {
                const dist = Math.hypot(item.x - clickX, item.y - clickY);
                if (dist < 40) {
                    clickedItem = item;
                    break;
                }
            }

            if (clickedItem) {
                this.selectedTrash = clickedItem;
                this.castHookToTarget(clickedItem.x, clickedItem.y);
            } else if (clickY > 100) {
                this.selectedTrash = null;
                this.castHookToTarget(clickX, clickY);
            }
        };

        this.canvas.addEventListener('click', handlePointer);
        this.canvas.addEventListener('touchstart', (e) => {
            if (e.touches && e.touches.length === 1) {
                handlePointer(e);
            }
        }, { passive: true });

        this.canvas.addEventListener('mousemove', (e) => this.handleCanvasMouseMove(e));

        // Keyboard Spacebar
        window.addEventListener('keydown', (e) => {
            if (e.code === 'Space' && this.isPlaying && !this.isPaused && !this.isModalOpen()) {
                e.preventDefault();
                sound.init();
                this.castHook();
            }
        });

        // HUD Cast Button
        document.getElementById('btn-cast-hook').addEventListener('click', () => {
            if (!this.isPlaying || this.isPaused || this.isModalOpen()) return;
            sound.init();
            this.castHook();
        });
    }

    startNewGame(difficulty = 'easy') {
        this.stopGame();

        this.difficulty = difficulty;
        const setting = this.diffSettings[difficulty];
        
        this.score = 0;
        this.combo = 0;
        this.maxCombo = 0;
        this.timeRemaining = setting.time;
        this.cleanliness = 30;
        this.totalCaught = 0;
        this.correctCount = 0;
        this.wrongCount = 0;
        this.isPlaying = true;
        this.isPaused = false;

        this.hook.state = 'idle';
        this.hook.caughtItem = null;
        this.selectedTrash = null;
        this.currentSortingItem = null;

        // Reset Pause Button UI
        const pauseBtn = document.getElementById('btn-pause');
        pauseBtn.innerHTML = `<i class="fa-solid fa-pause text-xs md:text-base"></i>`;
        pauseBtn.className = "p-1.5 md:p-2 bg-amber-600 hover:bg-amber-500 rounded-full text-white w-8 h-8 md:w-9 md:h-9 flex items-center justify-center transition";

        this.spawnInitialSeaLife();
        this.updateHUD();
        this.updateHighScoreDisplay();

        // Hide all modals
        document.getElementById('screen-start').classList.add('hidden');
        document.getElementById('modal-result').classList.add('hidden');
        document.getElementById('modal-sorting').classList.add('hidden');
        document.getElementById('modal-feedback').classList.add('hidden');
        document.getElementById('modal-tutorial').classList.add('hidden');
        document.getElementById('modal-codex').classList.add('hidden');
        document.getElementById('target-indicator').classList.add('hidden');

        // Show Game HUD
        document.getElementById('hud').classList.remove('hidden');
        document.getElementById('game-controls-hint').classList.remove('hidden');

        // Start Timer Interval safely
        this.timerInterval = setInterval(() => this.tickTimer(), 1000);
    }

    stopGame() {
        this.isPlaying = false;
        this.isPaused = false;
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    tickTimer() {
        if (this.isPaused || !this.isPlaying) return;

        this.timeRemaining--;
        document.getElementById('hud-timer').innerText = `${this.timeRemaining}초`;

        if (this.timeRemaining <= 0) {
            this.endGame();
        }
    }

    pauseGame() {
        if (!this.isPlaying) return;
        this.isPaused = !this.isPaused;
        const btn = document.getElementById('btn-pause');
        if (this.isPaused) {
            btn.innerHTML = `<i class="fa-solid fa-play text-xs md:text-base"></i>`;
            btn.classList.replace('bg-amber-600', 'bg-emerald-600');
            btn.classList.replace('hover:bg-amber-500', 'hover:bg-emerald-500');
        } else {
            btn.innerHTML = `<i class="fa-solid fa-pause text-xs md:text-base"></i>`;
            btn.classList.replace('bg-emerald-600', 'bg-amber-600');
            btn.classList.replace('hover:bg-emerald-500', 'hover:bg-amber-500');
        }
    }

    endGame() {
        this.stopGame();
        this.saveHighScore();

        // Hide HUD hints
        document.getElementById('game-controls-hint').classList.add('hidden');
        document.getElementById('target-indicator').classList.add('hidden');

        // Calculate statistics
        const totalAttempts = this.correctCount + this.wrongCount;
        const accuracy = totalAttempts > 0 ? Math.round((this.correctCount / totalAttempts) * 100) : 0;

        // Grade Calculation
        let gradeTitle = '🌱 바다 초보자 (C등급)';
        let msg = '분리배출 지식을 더 익혀서 깨끗한 바다를 다시 만들어봐요!';

        if (totalAttempts > 0 && accuracy >= 90 && this.score >= 600) {
            gradeTitle = '👑 바다의 수호자 (S등급)';
            msg = '완벽한 분리배출 능력으로 바다 생태계를 생생하게 소생시켰습니다! 최고의 낚시왕입니다!';
        } else if (accuracy >= 80) {
            gradeTitle = '🌊 환경 수호 대원 (A등급)';
            msg = '훌륭한 환경 지식으로 해양 생물들에게 깨끗한 보금자리를 선물했습니다!';
        } else if (accuracy >= 60) {
            gradeTitle = '🐟 청결한 지킴이 (B등급)';
            msg = '좋은 시도였습니다! 실생활에서도 올바른 분리수거를 실천해주세요!';
        }

        // Update Results Modal UI
        document.getElementById('result-score').innerText = this.score.toLocaleString();
        document.getElementById('result-accuracy').innerText = `${accuracy}%`;
        document.getElementById('result-cleanliness').innerText = `${Math.round(this.cleanliness)}%`;
        document.getElementById('result-total-count').innerText = `${this.totalCaught}개`;
        document.getElementById('result-correct-count').innerText = `${this.correctCount}개`;
        document.getElementById('result-wrong-count').innerText = `${this.wrongCount}개`;
        document.getElementById('result-max-combo').innerText = `${this.maxCombo}회`;
        document.getElementById('result-grade-title').innerText = gradeTitle;
        document.getElementById('result-env-message').innerText = msg;

        document.getElementById('modal-result').classList.remove('hidden');
    }

    spawnInitialSeaLife() {
        this.floatingItems = [];
        this.fishes = [];

        // Spawn 6 initial trash items
        for (let i = 0; i < 6; i++) {
            this.spawnTrashItem();
        }

        // Spawn fish
        for (let i = 0; i < 5; i++) {
            this.fishes.push({
                x: Math.random() * this.width,
                y: 180 + Math.random() * (this.height - 250),
                speed: (1 + Math.random() * 1.5) * (Math.random() < 0.5 ? 1 : -1),
                size: 18 + Math.random() * 14,
                color: ['#f97316', '#ef4444', '#eab308', '#a855f7'][Math.floor(Math.random() * 4)]
            });
        }
    }

    spawnTrashItem() {
        const dbItem = TRASH_DATABASE[Math.floor(Math.random() * TRASH_DATABASE.length)];
        const speedMult = this.diffSettings[this.difficulty].speedMult;

        this.floatingItems.push({
            instanceId: Math.random().toString(36).substr(2, 9),
            data: dbItem,
            x: Math.random() * (this.width - 100) + 50,
            y: 160 + Math.random() * (this.height - 240),
            vx: (Math.random() * 1.2 - 0.6) * speedMult,
            vy: Math.sin(Math.random() * Math.PI) * 0.3,
            wobble: Math.random() * Math.PI * 2
        });
    }

    handleCanvasMouseMove(e) {
        if (!this.isPlaying || this.isPaused || this.hook.state !== 'idle' || this.isModalOpen()) return;

        const rect = this.canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Collision check with floating trash
        let hovered = null;
        for (const item of this.floatingItems) {
            const dist = Math.hypot(item.x - mouseX, item.y - mouseY);
            if (dist < 35) {
                hovered = item;
                break;
            }
        }

        const indicator = document.getElementById('target-indicator');
        if (hovered) {
            this.canvas.style.cursor = 'pointer';
            indicator.classList.remove('hidden');
            indicator.style.left = `${hovered.x + rect.left}px`;
            indicator.style.top = `${hovered.y + rect.top}px`;
        } else if (!this.selectedTrash) {
            this.canvas.style.cursor = 'default';
            indicator.classList.add('hidden');
        }
    }

    castHook() {
        if (this.hook.state !== 'idle') return;

        if (this.selectedTrash && this.floatingItems.includes(this.selectedTrash)) {
            this.castHookToTarget(this.selectedTrash.x, this.selectedTrash.y);
        } else if (this.floatingItems.length > 0) {
            const nearest = this.floatingItems[0];
            this.selectedTrash = nearest;
            this.castHookToTarget(nearest.x, nearest.y);
        } else {
            this.castHookToTarget(this.width / 2, this.height / 2);
        }
    }

    castHookToTarget(tx, ty) {
        if (this.hook.state !== 'idle') return;
        sound.playCast();

        this.hook.state = 'dropping';
        this.hook.targetX = tx;
        this.hook.targetY = ty;
        this.hook.x = this.width / 2;
        this.hook.y = 50;
    }

    updateAndRender() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        // 1. Ocean Background
        this.renderOceanBackground();

        // 2. Aquatic Life
        this.renderFishes();

        // 3. Floating Garbage
        this.renderGarbage();

        // 4. Hook & Line Mechanics
        this.updateAndRenderHook();

        // Render Loop
        requestAnimationFrame(() => this.updateAndRender());
    }

    renderOceanBackground() {
        const cleanRatio = this.cleanliness / 100;
        const grad = this.ctx.createLinearGradient(0, 0, 0, this.height);

        if (cleanRatio > 0.5) {
            grad.addColorStop(0, '#38bdf8');
            grad.addColorStop(0.35, '#0284c7');
            grad.addColorStop(1, '#0c4a6e');
        } else {
            grad.addColorStop(0, '#64748b');
            grad.addColorStop(0.35, '#475569');
            grad.addColorStop(1, '#1e293b');
        }

        this.ctx.fillStyle = grad;
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Animated Waves
        const time = Date.now() * 0.003;
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.18)';
        this.ctx.beginPath();
        this.ctx.moveTo(0, 60);
        for (let x = 0; x <= this.width; x += 20) {
            const y = Math.sin(x * 0.02 + time) * 5 + 55;
            this.ctx.lineTo(x, y);
        }
        this.ctx.lineTo(this.width, 0);
        this.ctx.lineTo(0, 0);
        this.ctx.fill();

        // Seabed
        this.ctx.fillStyle = cleanRatio > 0.4 ? '#065f46' : '#27272a';
        this.ctx.beginPath();
        this.ctx.ellipse(this.width / 2, this.height + 25, this.width * 0.6, 65, 0, 0, Math.PI * 2);
        this.ctx.fill();
    }

    renderFishes() {
        if (this.cleanliness < 15) return; // Hide fish when heavily polluted

        this.fishes.forEach(fish => {
            if (this.isPlaying && !this.isPaused && !this.isModalOpen()) {
                fish.x += fish.speed;
                if (fish.x > this.width + 40) fish.x = -40;
                if (fish.x < -40) fish.x = this.width + 40;
            }

            this.ctx.save();
            this.ctx.translate(fish.x, fish.y);
            if (fish.speed < 0) this.ctx.scale(-1, 1);

            this.ctx.fillStyle = fish.color;
            this.ctx.beginPath();
            this.ctx.ellipse(0, 0, fish.size, fish.size * 0.5, 0, 0, Math.PI * 2);
            this.ctx.fill();

            // Tail
            this.ctx.beginPath();
            this.ctx.moveTo(-fish.size, 0);
            this.ctx.lineTo(-fish.size - 8, -6);
            this.ctx.lineTo(-fish.size - 8, 6);
            this.ctx.closePath();
            this.ctx.fill();

            // Eye
            this.ctx.fillStyle = '#ffffff';
            this.ctx.beginPath();
            this.ctx.arc(fish.size * 0.4, -fish.size * 0.1, 2.5, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.restore();
        });
    }

    renderGarbage() {
        this.floatingItems.forEach(item => {
            if (this.isPlaying && !this.isPaused && !this.isModalOpen() && item !== this.hook.caughtItem) {
                item.x += item.vx;
                item.wobble += 0.04;
                item.y += Math.sin(item.wobble) * 0.25;

                if (item.x < 40 || item.x > this.width - 40) item.vx *= -1;
            }

            this.ctx.save();
            this.ctx.translate(item.x, item.y);

            // Selection Highlight
            if (this.selectedTrash === item) {
                this.ctx.strokeStyle = '#f59e0b';
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.arc(0, 0, 26, 0, Math.PI * 2);
                this.ctx.stroke();
            }

            // Shadow
            this.ctx.fillStyle = 'rgba(0,0,0,0.15)';
            this.ctx.beginPath();
            this.ctx.ellipse(0, 18, 16, 5, 0, 0, Math.PI * 2);
            this.ctx.fill();

            // Emoji Icon
            this.ctx.font = '28px sans-serif';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(item.data.icon, 0, 0);

            // Name Tag
            this.ctx.font = 'bold 11px Gowun Dodum, sans-serif';
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.92)';
            const textWidth = this.ctx.measureText(item.data.name).width;
            this.ctx.fillRect(-textWidth/2 - 5, 16, textWidth + 10, 15);
            this.ctx.fillStyle = '#0f172a';
            this.ctx.fillText(item.data.name, 0, 24);

            this.ctx.restore();
        });
    }

    updateAndRenderHook() {
        const rodX = this.width / 2;
        const rodY = 40;

        if (this.hook.state === 'dropping') {
            if (this.selectedTrash && this.floatingItems.includes(this.selectedTrash)) {
                this.hook.targetX = this.selectedTrash.x;
                this.hook.targetY = this.selectedTrash.y;
            }

            const dx = this.hook.targetX - this.hook.x;
            const dy = this.hook.targetY - this.hook.y;
            const dist = Math.hypot(dx, dy);

            if (dist < 12) {
                let caught = null;
                for (let i = 0; i < this.floatingItems.length; i++) {
                    const it = this.floatingItems[i];
                    if (Math.hypot(it.x - this.hook.x, it.y - this.hook.y) < 38) {
                        caught = it;
                        break;
                    }
                }

                if (caught) {
                    sound.playCatch();
                    this.hook.caughtItem = caught;
                    this.hook.state = 'reeling';
                } else {
                    this.hook.state = 'returning';
                }
            } else {
                this.hook.x += (dx / dist) * this.hook.speed * 1.5;
                this.hook.y += (dy / dist) * this.hook.speed * 1.5;
            }
        } else if (this.hook.state === 'reeling' || this.hook.state === 'returning') {
            const dx = rodX - this.hook.x;
            const dy = rodY - this.hook.y;
            const dist = Math.hypot(dx, dy);

            if (dist < 15) {
                this.hook.state = 'idle';
                if (this.hook.caughtItem) {
                    const caught = this.hook.caughtItem;
                    this.hook.caughtItem = null;
                    this.floatingItems = this.floatingItems.filter(i => i !== caught);
                    this.selectedTrash = null;

                    // Open Sorting Modal
                    this.openSortingModal(caught);
                }
            } else {
                this.hook.x += (dx / dist) * this.hook.speed * 1.8;
                this.hook.y += (dy / dist) * this.hook.speed * 1.8;

                if (this.hook.caughtItem) {
                    this.hook.caughtItem.x = this.hook.x;
                    this.hook.caughtItem.y = this.hook.y + 15;
                }
            }
        }

        // Render Fishing Line
        if (this.hook.state !== 'idle') {
            this.ctx.strokeStyle = '#ffffff';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(rodX, rodY);
            this.ctx.lineTo(this.hook.x, this.hook.y);
            this.ctx.stroke();

            // Hook Metal Anchor
            this.ctx.strokeStyle = '#cbd5e1';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.arc(this.hook.x, this.hook.y + 5, 7, 0, Math.PI);
            this.ctx.stroke();
        }
    }

    openSortingModal(item) {
        this.currentSortingItem = item;
        
        document.getElementById('modal-trash-name').innerText = item.data.name;
        document.getElementById('modal-trash-mark').innerText = `표시: ${item.data.mark}`;
        document.getElementById('modal-trash-icon').innerText = item.data.icon;
        document.getElementById('modal-trash-material').innerText = `대표재질: ${item.data.material}`;
        document.getElementById('modal-trash-parts').innerText = item.data.parts;
        document.getElementById('modal-trash-prep').innerText = item.data.prep;

        // Render Bins
        const grid = document.getElementById('bin-grid');
        grid.innerHTML = '';

        BINS_DATABASE.forEach(bin => {
            const btn = document.createElement('button');
            btn.className = `${bin.color} text-white font-jua p-2.5 md:p-3 rounded-2xl shadow hover:opacity-95 active:scale-95 transition flex flex-col items-center justify-center gap-1 border-2 border-white/30`;
            btn.innerHTML = `
                <span class="text-xl md:text-2xl">${bin.icon}</span>
                <span class="text-xs md:text-sm">${bin.name}</span>
            `;
            btn.addEventListener('click', () => this.evaluateSorting(bin.id));
            grid.appendChild(btn);
        });

        document.getElementById('modal-sorting').classList.remove('hidden');
    }

    evaluateSorting(selectedBinId) {
        if (!this.currentSortingItem) return;
        const caughtItem = this.currentSortingItem;
        this.currentSortingItem = null;

        document.getElementById('modal-sorting').classList.add('hidden');

        const item = caughtItem.data;
        const isCorrect = (selectedBinId === item.correctBin);

        this.totalCaught++;

        const feedbackIconContainer = document.getElementById('feedback-icon-container');
        const feedbackIcon = document.getElementById('feedback-icon');
        const feedbackTitle = document.getElementById('feedback-title');
        const feedbackScoreBadge = document.getElementById('feedback-score-badge');
        const feedbackDesc = document.getElementById('feedback-desc');

        if (isCorrect) {
            sound.playCorrect();
            this.correctCount++;
            this.combo++;
            if (this.combo > this.maxCombo) this.maxCombo = this.combo;

            const comboBonus = (this.combo - 1) * 20;
            const gainedScore = item.score + comboBonus;
            this.score += gainedScore;

            this.cleanliness = Math.min(100, this.cleanliness + 8);

            feedbackIconContainer.className = "w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto flex items-center justify-center text-3xl md:text-4xl mb-3 shadow-inner bg-emerald-100 text-emerald-600 border-4 border-emerald-400";
            feedbackIcon.className = "fa-solid fa-check";
            feedbackTitle.innerText = "올바른 분리배출!";
            feedbackTitle.className = "font-jua text-2xl md:text-3xl mb-1.5 text-emerald-600";
            feedbackScoreBadge.innerText = `+${gainedScore}점 획득! (${this.combo}연속 콤보!)`;
            feedbackScoreBadge.className = "inline-block bg-emerald-100 text-emerald-800 text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3";

            feedbackDesc.innerHTML = `
                <p class="mb-2"><strong><i class="fa-solid fa-circle-info text-emerald-600 mr-1"></i>정답 해설:</strong> ${item.explanation}</p>
                <p class="text-emerald-800 bg-emerald-100/70 p-2 rounded-lg"><strong>💡 배출 팁:</strong> ${item.prep}</p>
            `;
        } else {
            sound.playWrong();
            this.wrongCount++;
            this.combo = 0; // Reset combo

            this.score = Math.max(0, this.score - 30);
            this.cleanliness = Math.max(0, this.cleanliness - 4);

            const correctBinObj = BINS_DATABASE.find(b => b.id === item.correctBin);

            feedbackIconContainer.className = "w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto flex items-center justify-center text-3xl md:text-4xl mb-3 shadow-inner bg-rose-100 text-rose-600 border-4 border-rose-400";
            feedbackIcon.className = "fa-solid fa-xmark";
            feedbackTitle.innerText = "잘못된 분류입니다!";
            feedbackTitle.className = "font-jua text-2xl md:text-3xl mb-1.5 text-rose-600";
            feedbackScoreBadge.innerText = "-30점 차감 (콤보 초기화)";
            feedbackScoreBadge.className = "inline-block bg-rose-100 text-rose-800 text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3";

            feedbackDesc.innerHTML = `
                <p class="mb-2"><strong><i class="fa-solid fa-circle-exclamation text-rose-600 mr-1"></i>올바른 수거함:</strong> <span class="text-rose-700 font-bold">'${correctBinObj ? correctBinObj.name : item.correctBin}'</span> 수거함으로 배출해야 합니다.</p>
                <p class="mb-2"><strong>해설:</strong> ${item.explanation}</p>
                <p class="text-amber-800 bg-amber-100/70 p-2 rounded-lg"><strong>⚠️ 주의사항:</strong> ${item.warning}</p>
            `;
        }

        this.updateHUD();
        this.saveHighScore();

        // Maintain ocean garbage pool
        if (this.floatingItems.length < 5) {
            this.spawnTrashItem();
        }

        document.getElementById('modal-feedback').classList.remove('hidden');
    }

    updateHUD() {
        document.getElementById('hud-score').innerText = this.score.toLocaleString();
        document.getElementById('hud-combo').innerText = `${this.combo}x`;
        document.getElementById('cleanliness-bar').style.width = `${this.cleanliness}%`;
        document.getElementById('cleanliness-text').innerText = `${Math.round(this.cleanliness)}%`;
    }
}

let game = null;

window.addEventListener('load', () => {
    game = new OceanGame();
    game.updateAndRender();

    renderCodex();

    // Difficulty Buttons
    document.querySelectorAll('.btn-diff').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.btn-diff').forEach(b => {
                b.classList.remove('bg-sky-600', 'text-white', 'border-sky-600', 'shadow');
                b.classList.add('bg-white', 'text-slate-700', 'border-slate-300');
            });
            const target = e.currentTarget;
            target.classList.remove('bg-white', 'text-slate-700', 'border-slate-300');
            target.classList.add('bg-sky-600', 'text-white', 'border-sky-600', 'shadow');

            game.difficulty = target.dataset.diff;
        });
    });

    // Start Button
    document.getElementById('btn-start-game').addEventListener('click', () => {
        sound.init();
        game.startNewGame(game.difficulty);
    });

    // Pause Button
    document.getElementById('btn-pause').addEventListener('click', () => game.pauseGame());

    // Sound Toggle Button
    document.getElementById('btn-sound-toggle').addEventListener('click', () => {
        sound.enabled = !sound.enabled;
        const icon = document.getElementById('icon-sound');
        if (sound.enabled) {
            icon.className = "fa-solid fa-volume-high text-xs md:text-base";
        } else {
            icon.className = "fa-solid fa-volume-xmark text-rose-300 text-xs md:text-base";
        }
    });

    // Modal Control Triggers
    document.getElementById('btn-open-tutorial').addEventListener('click', () => {
        document.getElementById('modal-tutorial').classList.remove('hidden');
    });
    document.getElementById('btn-close-tutorial').addEventListener('click', () => {
        document.getElementById('modal-tutorial').classList.add('hidden');
    });

    document.getElementById('btn-open-codex').addEventListener('click', () => {
        document.getElementById('modal-codex').classList.remove('hidden');
    });
    document.getElementById('btn-close-codex').addEventListener('click', () => {
        document.getElementById('modal-codex').classList.add('hidden');
    });

    // Feedback Next Button
    document.getElementById('btn-next-trash').addEventListener('click', () => {
        document.getElementById('modal-feedback').classList.add('hidden');
    });

    // Restart & Home
    document.getElementById('btn-restart').addEventListener('click', () => {
        game.startNewGame(game.difficulty);
    });
    document.getElementById('btn-go-home').addEventListener('click', () => {
        game.stopGame();
        document.getElementById('modal-result').classList.add('hidden');
        document.getElementById('hud').classList.add('hidden');
        document.getElementById('screen-start').classList.remove('hidden');
    });
});

function renderCodex() {
    const container = document.getElementById('codex-list');
    container.innerHTML = '';

    TRASH_DATABASE.forEach(item => {
        const correctBinObj = BINS_DATABASE.find(b => b.id === item.correctBin);

        const card = document.createElement('div');
        card.className = "bg-white/95 p-3.5 rounded-2xl border border-emerald-200 shadow-sm flex flex-col justify-between";
        card.innerHTML = `
            <div>
                <div class="flex items-center justify-between mb-1.5">
                    <span class="text-2xl md:text-3xl">${item.icon}</span>
                    <span class="bg-sky-100 text-sky-800 text-[11px] font-bold px-2 py-0.5 rounded-full">${item.mark}</span>
                </div>
                <h4 class="font-jua text-base md:text-lg text-slate-800">${item.name}</h4>
                <p class="text-[11px] text-slate-500 mb-2">대표재질: ${item.material}</p>
                <p class="text-xs text-slate-700 bg-emerald-50 p-2 rounded-lg mb-2">
                    <strong><i class="fa-solid fa-recycle text-emerald-600 mr-1"></i>올바른 분류:</strong> 
                    <span class="text-emerald-800 font-bold">${correctBinObj ? correctBinObj.name : item.correctBin}</span>
                </p>
            </div>
            <p class="text-[11px] text-slate-600 border-t border-slate-100 pt-2 leading-snug">
                <strong>배출방법:</strong> ${item.prep}
            </p>
        `;
        container.appendChild(card);
    });
}