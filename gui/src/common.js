export const tile_types = {
    0: "m", 1: "p", 2: "s", 3: "z",
    m: 0, p: 1, s: 2, z: 3,
};

export const seat_colors = [
    "#FF8C00", // 0: 自家
    "#FF0000", // 1: 下家
    "#00FF00", // 2: 対家
    "#2222FF", // 3: 上家
    "#888888", // 4: ドラ "D"
    "#000000", // 5: 山・手牌 "R"
];

export function seat_pos(seat_self, seat_target) {
    return (4 + seat_target - seat_self) % 4;
}
