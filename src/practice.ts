const name: string = "Kento";
const age: number = 28;
const isStudent: boolean = false;

const city = "Tokyo";
const score = 100;

type StudyRecord = {
    title: string;
    genre: string;
    time: number;
    contents: string;
    star: number;
}

const record: StudyRecord = {
    title: "React学習",
    genre: "フロントエンド",
    time: 3600,
    contents: "useEffectを学んだ",
    star: 4
};

const formatTime = (seconds: number): string => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor(seconds %3600 / 3600);
    const s = Math.floor(seconds % 60);
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

const records: StudyRecord[] = [
    { title: "React学習", genre: "フロントエンド", time: 3600, contents: "useEffectを学んだ", star: 4}, 
    { title: "TS学習", genre: "フロントエンド", time: 1800, contents: "型の書き方を学んだ", star: 5}, 
]

console.log(name);
console.log(age);
console.log(isStudent);
console.log(record.title);
console.log(formatTime(3600));

console.log(records[0].title);
console.log(records[1].star);