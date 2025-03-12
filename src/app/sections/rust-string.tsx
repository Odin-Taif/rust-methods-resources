"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useState } from "react";

const methods = [
    { name: "new", code: "let s = String::new();", description: "Creates a new empty String." },
    { name: "from", code: "let s = String::from(\"hello\");", description: "Creates a String from a string literal." },
    { name: "push", code: "s.push('a');", description: "Appends a character to the String." },
    { name: "push_str", code: "s.push_str(\"world\");", description: "Appends a string slice to the String." },
    { name: "insert", code: "s.insert(2, 'x');", description: "Inserts a character at a specific index." },
    { name: "replace", code: "let new_s = s.replace(\"old\", \"new\");", description: "Replaces all occurrences of a substring." },
    { name: "truncate", code: "s.truncate(3);", description: "Truncates the String to a specific length." },
    { name: "clear", code: "s.clear();", description: "Clears the String, making it empty." },
    { name: "len", code: "let length = s.len();", description: "Returns the number of bytes in the String." },
    { name: "is_empty", code: "let empty = s.is_empty();", description: "Checks if the String is empty." },
    { name: "find", code: "let pos = s.find(\"text\");", description: "Finds the first occurrence of a substring." },
    { name: "to_lowercase", code: "let lower = s.to_lowercase();", description: "Converts the String to lowercase." },
    { name: "to_uppercase", code: "let upper = s.to_uppercase();", description: "Converts the String to uppercase." },
    { name: "trim", code: "let trimmed = s.trim();", description: "Removes whitespace from both ends." },
    { name: "split", code: "let parts: Vec<&str> = s.split(\" \").collect();", description: "Splits the String into parts based on a delimiter." },
    { name: "join", code: "let joined = vec![\"a\", \"b\"].join(\",\");", description: "Joins multiple strings with a separator." },
];

export default function RustStringMethods() {
    const [copied, setCopied] = useState<number | null>(null);

    const handleCopy = (code: string, index: number) => {
        navigator.clipboard.writeText(code);
        setCopied(index);
        setTimeout(() => setCopied(null), 1000);
    };

    return (
        <div>
            <h1 className="text-4xl font-bold text-black dark:text-white">Rust String Methods</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {methods.map((method, index) => (
                    <Card key={index} className="bg-gray-900 text-white rounded-lg relative shadow-md">
                        <CardContent className="p-4 font-mono text-sm relative">
                            <div className="absolute top-2 right-2 flex gap-2">
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => handleCopy(method.code, index)}
                                        >
                                            <Copy size={16} />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>{copied === index ? "Copied!" : "Copy"}</TooltipContent>
                                </Tooltip>
                            </div>
                            <span className="text-green-400">{method.name}()</span>
                            <p className="text-gray-400 text-xs mt-1">{method.description}</p>
                            <pre className="mt-2 bg-gray-800 p-2 rounded-lg overflow-x-auto border border-gray-700">
                                {method.code}
                            </pre>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
