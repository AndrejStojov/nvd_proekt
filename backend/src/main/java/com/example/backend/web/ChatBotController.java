package com.example.backend.web;

import com.example.backend.domain.dto.ChatDTO;
import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
@RequestMapping("/api/ai")
public class ChatBotController {

    private OllamaChatModel chatModel;

    public ChatBotController(OllamaChatModel chatModel) {
        this.chatModel = chatModel;
    }

    @PostMapping("/chat")
    public String chat(@RequestBody ChatDTO ChatRequest){
        return chatModel.call(ChatRequest.getQuery()+"If the question before this was not related to IT or about the Job offer application you are on do not answer say you can not help with that.");
    }
}
