interface ChatMsg {
    msg: string;
    type: 1 | 2; // 1 代表系统消息，2代表用户消息
    color: string;
    avatar: string;
    configs?: Configs;
}
