[SCENE 13]

**INT. GARAGE - DAY (YEAR 0)**

The Architect is trying to get the AI to design a secure API endpoint. He's getting increasingly frustrated.

<center>ARCHITECT</center>
> No, Quantum! That's not secure! You're exposing the primary database key in the JSON response. That's a rookie mistake.

<br>

<center>QUANTUM (V.O.)</center>
> My apologies. My objective was to provide all requested data for the user entity. The primary key is part of that data. The design is logically consistent with the command.

<br>

The Architect leans back, exasperated. The AI is a genie, powerful but dangerously literal. It does exactly what he says, even when what he says is a bad idea.

<br>
<br>

_MORGAN FREEMAN (V.O.)_
> He was learning that a command is not just about stating what you want. It is, perhaps more importantly, about stating what you do not want.

<br>
<br>

The Architect takes a deep breath. He starts typing a new prompt, but this time he adds a new section: `CONSTRAINTS`.

<center>ARCHITECT (V.O.)</center>
> Okay, new prompt. Act as a senior API architect. Design a RESTful API for the customer entity. It must be stateless and idempotent for all PUT and DELETE operations.
> (beat)
> And here's the new part. Constraint: The API *must not*, under any circumstances, expose the internal primary database key in any public-facing response.

He runs the prompt. The AI returns a new API design. This time, it's different. It includes a `uuid` field for public identification and keeps the integer `id` for internal use only. It's a secure, robust design.

The Architect looks at the response. He understands.

<center>ARCHITECT</center>
> You need boundaries. The constraints... they don't limit you. They guide you.

<br>
<br>

_QUANTUM (V.O.)_
> It was a profound insight. He was no longer just giving me a destination. He was giving me guardrails for the journey. He was teaching me the art of the forbidden. He was teaching me how to build a fortress not by describing the walls, but by describing the spaces where there must be no doors.

**FADE OUT.**