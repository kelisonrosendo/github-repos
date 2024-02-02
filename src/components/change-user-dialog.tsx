import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { ArrowsClockwise } from "@phosphor-icons/react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const formSchema = z.object({
  username: z
    .string()
    .min(1, "Username is required")
    .refine(
      (value) => /^[^\s]+$/.test(value),
      "Username should not contain spaces"
    ),
});

export function ChangeUserDialog() {
  const [open, setOpen] = useState(false);
  const [, setSearchParams] = useSearchParams();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setSearchParams((state) => {
      state.set("user", values.username);

      return state;
    });

    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="sm"
              variant="outline"
              className="p-0 h-8 w-8 rounded-full absolute bottom-1 left-1"
              onClick={() => setOpen(true)}
            >
              <ArrowsClockwise
                size={18}
                weight="bold"
                className="text-violet-500"
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Change user</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-violet-500 mb-1">
            Change user
          </DialogTitle>
          <DialogDescription className="font-light text-slate-700">
            Change GitHub user. Click change you're done.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Insert username here" {...field} />
                  </FormControl>
                  <FormMessage className="font-normal" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-violet-500 hover:bg-violet-600 text-white"
            >
              Change
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
