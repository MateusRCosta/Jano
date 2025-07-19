import { Button } from "@/component/ui/Button";
import { Card } from "@/component/ui/Card";
import { Input } from "@/component/ui/Input";


export default function FormLogin() {
    return (
        <Card.Root>
            <Card.Content>
                <form className="flex flex-col p-2 h-full w-full gap-4">
                    <Input label="E-mail" variant="outlined" bgColor="bg-white"/>
                    <Input label="Senha" variant="outlined" bgColor="bg-white"/>
                    <Button bgColor="bg-primary" variant="default">

                    </Button>
                </form>
            </Card.Content>
        </Card.Root>
    );
};